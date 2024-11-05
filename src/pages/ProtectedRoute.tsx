import React, { useState, ReactNode } from "react";
const correctPassword = "qwe123";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted password:", password);
    if (password === correctPassword) {
      setAccessGranted(true);
      console.log("Access granted");
    } else {
      alert("Неверный пароль!");
      console.log("Access denied");
    }
  };

  if (accessGranted) {
    return <>{children}</>;
  }

  return (
    <div className="protected-route">
      <h1>Сайт в разработке</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Введите пароль"
          required
        />
        <button className="buttonstylein" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
