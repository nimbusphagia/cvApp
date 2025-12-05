import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ExportButton({ targetId = "curriculum" }) {
  const handleExport = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    // Render element to canvas
    const canvas = await html2canvas(element, { scale: 2 });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = pdfWidth / imgWidth; // scale to fit A4 width
    const imgScaledWidth = imgWidth * ratio;
    const imgScaledHeight = imgHeight * ratio;

    let position = 0;
    let remainingHeight = imgScaledHeight;

    while (remainingHeight > 0) {
      pdf.addImage(imgData, "PNG", 0, position, imgScaledWidth, imgScaledHeight);
      remainingHeight -= pdfHeight;
      position -= pdfHeight;
      if (remainingHeight > 0) pdf.addPage();
    }

    pdf.save("curriculum.pdf");
  };

  return (
    <button
      className="exportBtn"
      onClick={handleExport}

    >
      Export Curriculum PDF
    </button>
  );
}

export default ExportButton;

