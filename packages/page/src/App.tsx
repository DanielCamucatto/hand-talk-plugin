export const  App = () => {

  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Hello Tailwind v4 + TypeScript!
      </h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-red-700 mb-4">Contador</p>
        
        <button
          className="bg-primary hover:bg-blue-700 text-red font-bold py-2 px-4 rounded transition-colors"
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}