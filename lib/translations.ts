export const translations = {
  en: {
    welcome: "Welcome",
    writeOurHeart: "Write Our Heart",
    loading: "Loading...",
    createPersonalized: "Create personalized greeting cards for your loved ones",
    login: "Login",
    signUp: "Sign Up",
    email: "Email",
    password: "Password",
    fullName: "Full Name",
    forgotPassword: "Forgot Password?",
    // Add more translations as needed
  },
  es: {
    welcome: "Bienvenido",
    writeOurHeart: "Escribe Nuestro Corazón",
    loading: "Cargando...",
    createPersonalized: "Crea tarjetas de felicitación personalizadas para tus seres queridos",
    login: "Iniciar Sesión",
    signUp: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    fullName: "Nombre Completo",
    forgotPassword: "¿Olvidaste tu contraseña?",
  },
  zh: {
    welcome: "欢迎",
    writeOurHeart: "写我们的心",
    loading: "加载中...",
    createPersonalized: "为您的亲人创建个性化贺卡",
    login: "登录",
    signUp: "注册",
    email: "电子邮件",
    password: "密码",
    fullName: "全名",
    forgotPassword: "忘记密码？",
  },
  // Add other languages: tl (Tagalog), vi (Vietnamese), ar (Arabic), ko (Korean), ru (Russian), fr (French), de (German), hi (Hindi)
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
