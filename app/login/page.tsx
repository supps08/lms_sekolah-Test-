"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Login.css";

const DUMMY_EMAIL = "admin@examlingua.com";
const DUMMY_PASSWORD = "admin123";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleLogin() {
    setErrorMessage("");
    setIsLoading(true);

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      router.push("/admin");
    } else {
      setIsLoading(false);
      setErrorMessage("Email atau password salah");
    }
  }

  function handleGoogleLogin() {
    console.log("Login dengan Google");
  }

  return (
    <div className="login-page">
      <div className="circle-top-right" />
      <div className="circle-bottom-left" />

      <div className="login-logo">
        <span className="logo-exam">Exam</span>
        <span className="logo-lingua">Lingua</span>
      </div>

      <div className="login-card">
        <h1 className="login-heading">Selamat Datang Kembali</h1>
        <p className="login-subheading">Masuk untuk melanjutkan persiapan ujianmu.</p>

        <div className="form-group">
          <label className="form-label">Email atau Nama Pengguna</label>
          <div className="input-wrapper">
            <span className="input-icon">✉</span>
            <input
              type="email"
              placeholder="contoh@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="label-row">
            <label className="form-label">Kata Sandi</label>
            <button
              onClick={() => console.log("Lupa password")}
              className="forgot-button"
            >
              Lupa Password?
            </button>
          </div>
          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}

        <button
          onClick={handleLogin}
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? "Memuat..." : "Masuk"}
        </button>

        <div className="divider-wrapper">
          <div className="divider-line" />
          <span className="divider-text">atau</span>
          <div className="divider-line" />
        </div>

        <button onClick={handleGoogleLogin} className="google-button">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="google-icon"
          />
          Masuk dengan Google
        </button>

        <p className="register-text">
          Belum punya akun?{" "}
          <button
            onClick={() => console.log("Pergi ke halaman daftar")}
            className="register-link"
          >
            Daftar
          </button>
        </p>
      </div>

      <p className="login-footer">
        Dipercaya oleh ribuan siswa Indonesia untuk simulasi IELTS, TOEFL, dan Cambridge.
      </p>
    </div>
  );
}

export default Login;