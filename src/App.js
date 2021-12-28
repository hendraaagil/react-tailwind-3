import logo from './logo.svg';

function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-slate-800 transition-all">
      <header className="text-center text-gray-100 text-2xl">
        <img
          src={logo}
          className="mx-auto w-full pointer-events-none animate-spin-slow"
          alt="React logo"
        />
        <div className="flex flex-col items-center">
          <p className="my-4 font-sans">
            Edit <code className="font-mono">src/App.js</code> and save to
            reload.
          </p>
          <a
            className="underline text-sky-600"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </main>
  );
}

export default App;
