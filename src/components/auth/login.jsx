import "./styles.css";

import { useState } from "react"
// import { signIn } from "next-auth/react"
import { Github, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom";

const githubOAuthUrl = 'https://github.com/login/oauth/authorize?scope=user:email&client_id=Ov23licDfVR4J8iJV4wv';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const handleGithubLogin = async () => {
    // setIsLoading(true)
    // try {
    //   await signIn("github", { callbackUrl: "/dashboard" })
    // } catch (error) {
    //   console.error("Login failed:", error)
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome to Auto Deployer</h1>
        <p className="login-subtitle">Sign in to deploy your projects with ease</p>

        <button className="login-btn" onClick={()=>window.location.href=githubOAuthUrl} disabled={isLoading}>
          {isLoading ? <span className="loading-spinner"></span> : <Github className="w-5 h-5" />}
          Sign in with GitHub
        </button>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button className="login-btn" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#d1d5db" }}>
          <Mail className="w-5 h-5" />
          Sign in with Email
        </button>

        <p className="text-sm text-gray-400 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

