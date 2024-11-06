function App() {
  return (
    <>
      <main className="bg-[#34495e] h-screen w-screen flex justify-center gap-96 pt-28">
        <div className="text-white w-[700px]">
          <h3 className="text-white text-center mb-8 text-xl">Ebook Grátis</h3>
          <p className="mb-6">
            Aprenda a identificar, examinar e lutar contra a desinformação através
            do nosso e-book gratuito. Este manual, repleto de conselhos práticos,
            instrumentos e táticas eficientes, auxiliará você a explorar o
            universo digital com mais tranquilidade e discernimento. Faça o
            download agora e se previna contra as notícias falsas!
          </p>
          <div
            className="w-[650px] h-[800px] bg-[#fcb304] flex flex-col items-center shadow-[4px_4px_20px_0px_rgba(192,192,192,0.8)]"
          >
            <p className="mt-2 text-lg">eBook</p>
            <p className="mt-72 font-extrabold text-center">
              <span className="text-5xl">Combate às Fake News: </span><br />
              <span className="text-4xl">um Guia Completo</span>
            </p>
            <span className="mt-80 text-lg font-bold">Mateus Souza</span>
          </div>
        </div>

        <div
          className="w-[650px] h-[300px] bg-[#2d3e50] rounded-lg text-white flex flex-col items-center"
        >
          <p className="mt-12 text-2xl mb-28">
            Clique abaixo para baixar sem material
          </p>
          <a
            href="https://drive.google.com/file/d/1gSQLLf5C-UTlmmK9CzI4jjBth1AU50eU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e63c57] text-lg font-bold w-[550px] h-[60px] rounded-md flex justify-center items-center"
          >
            Baixar eBook
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
