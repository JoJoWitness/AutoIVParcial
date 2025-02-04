import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      window.location.href = "/login";
      alert("Sesión cerrada exitosamente.");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-[10px] gap-[10px] rounded-[30px]  font-bold w-4/5 border-3 p-2 cursor-pointer active:scale-98">
      Logout
    </button>
  );
};

export default LogoutButton;