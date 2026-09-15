import { COMPANY } from "./data";

export function waLink(message = "Hello GN Packaging, I need information regarding your packaging products. Please contact me.") {
  const num = COMPANY.whatsapp_number;
  return `https://wa.me/91${num}?text=${encodeURIComponent(message)}`;
}

export function callLink() {
  return `tel:+91${COMPANY.call_number}`;
}

export function productInquiry(product) {
  const msg = `Hello GN Packaging,\n\nI am interested in *${product}*.\n\nPlease share quotation, available sizes and MOQ.\n\nThanks.`;
  return waLink(msg);
}

export function customPackagingWA({ length, width, height, gsm, ply, printing, quantity, remarks }) {
  const msg = `Hello,\nI need custom packaging.\n\nSize:\n  Length: ${length || "-"}\n  Width: ${width || "-"}\n  Height: ${height || "-"}\n\nMaterial: ${gsm ? gsm + " GSM" : "-"} / ${ply || "-"}\nPrinting: ${printing || "-"}\nQuantity: ${quantity || "-"}\nRemarks: ${remarks || "-"}\n\nPlease send quotation.`;
  return waLink(msg);
}
