import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import cenegedLogo from '../assets/logo-ceneged.png'; // Caminho da imagem no projeto

const FluxoLancamento = () => {
  const fluxoRef = useRef();

  // 📌 Exportar como PNG (Alta Qualidade)
  const exportToPNG = async () => {
    const canvas = await html2canvas(fluxoRef.current, { scale: 3 });
    const link = document.createElement('a');
    link.download = 'fluxo-lancamento.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📌 Exportar como PDF (Alta Qualidade)
  const exportToPDF = async () => {
    const canvas = await html2canvas(fluxoRef.current, { scale: 3 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('fluxo-lancamento.pdf');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Conteúdo a ser capturado */}
      <div ref={fluxoRef} className="max-w-3xl bg-white p-12 rounded-lg shadow-lg relative">
        
        {/* 🔹 Logo Ceneged no canto superior direito */}
        <img 
          src={cenegedLogo} 
          alt="Logo Ceneged" 
          className="absolute top-2 right-3 max-w-[65px] h-auto"
        />

        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
          📌 Fluxo de Lançamento de Serviços e Materiais em Obras Elétricas
        </h1>

        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Objetivo:</h2>
        <p className="text-gray-600 mb-4">
          Garantir que os serviços executados e os materiais utilizados sejam lançados corretamente no sistema, evitando falhas, retrabalho e impactos financeiros.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-700">🔹 Etapas do Processo</h2>

        <div className="mb-2">
          <h3 className="text-lg font-semibold text-blue-600">1️⃣ Execução do Serviço pela Equipe de Campo</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>A <strong>equipe de campo</strong> executa o serviço conforme planejado.</li>
            <li>Registra os materiais aplicados e as atividades realizadas.</li>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="text-lg font-semibold text-blue-600">2️⃣ Lançamento no Sistema</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Equipe de Campo</strong> realiza o lançamento inicial (serviços e/ou materiais) no aplicativo <strong>JUPITER</strong>.</li>
            <li>Inconsistências ou dúvidas devem ser informadas à Supervisão de imediato.</li>
          </ul>
        </div>

        <div className="mb-2">
          <h3 className="text-lg font-semibold text-blue-600">3️⃣ Validação e Ajustes (Quando Necessário)</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Supervisão verifica se os lançamentos são compatíveis.</li>
            <li>Se houver erros, ajusta ou solicita revisão da equipe de campo.</li>
            <li>O Assistente Administrativo com auxílio da supervisão, revisa e corrige inconsistências no GPM Web.</li>
          </ul>
          <p className="text-gray-600 mt-2"><strong>⏳ Prazos:</strong> Serviços executados até D devem ser lançados até D+1.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-600">4️⃣ Fechamento e Conferência</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>No final do D+1, verifica-se se todos os lançamentos foram feitos corretamente.</li>
            <li>A Coordenação assegura-se de que as informações lançadas são reais, dando assim o aval para a liberação da Folha de Medição à LIGHT.</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-700">📌 Diretrizes e Boas Práticas</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Lançamentos no prazo garantem eficiência e reduzem retrabalho.</li>
          <li>Dúvidas devem ser informadas imediatamente à liderança.</li>
          <li>Registros completos evitam impactos financeiros e operacionais.</li>
          <li>A colaboração entre campo e administração é essencial.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-gray-700">📢 Conclusão</h2>
        <p className="text-gray-600 mb-2">Esse fluxo assegura precisão, transparência e eficiência no controle de serviços e materiais.</p>
        <p className="text-gray-600 mb-2">A colaboração entre campo e administração é essencial para evitar erros e garantir qualidade.</p>
        <p className="text-gray-600 mb-2">O compromisso de todos no cumprimento do prazo até D+1 garante o sucesso do processo.</p>

        <p className="text-lg font-bold text-center text-green-600">🚀 Vamos juntos garantir um processo eficiente e sem falhas! 💡</p>
      </div>

      {/* Botões para exportação no final */}
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={exportToPNG} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Exportar como PNG
        </button>
        <button onClick={exportToPDF} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Exportar como PDF
        </button>
      </div>
    </div>
  );
};

export default FluxoLancamento;
