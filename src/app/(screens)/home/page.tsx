import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 gap-8">
      {/* Logo ou Imagem de Login */}
      <Image
        src="/logo.png"
        alt="Login Illustration"
        width={300}
        height={300}
        className="rounded shadow-lg"
        priority
      />

      {/* Formulário ou Conteúdo */}
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Sucesso!</h1>
      </div>

      {/* Botão interativo para Home */}
      <Link
        href="/"
        className="bg-black text-white rounded-full px-6 py-3 shadow-md hover:bg-blue-500 transition"
      >
        Ir para Início
      </Link>
    </div>
  );
}
