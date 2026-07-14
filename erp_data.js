/* AAG Corporation — ERP Live Dashboard : DATA FILE
   อัปเดตอัตโนมัติโดย scheduled task ทุกเช้า (ดึงจาก Pojjaman ERP)
   สถานะ: PARTIAL — เลขจริงเฉพาะ "ยอดรับชำระ (Receipt)" ที่เหลือ null = รอ sync */
window.ERP_DATA = {
  meta: {
    sample: false,
    partial: true,
    note: "เลขจริง: ยอดรับชำระสะสมปี 2026 (Receipt List). PO/GR: รายงานคืนค่าว่างที่ scope รวม (ต้องเลือก Organization รายโปรเจกต์). มูลค่าสต็อก: Cost ถูกซ่อนใน web viewer (0.00) ต้องใช้ xlsx export เหมือน dashboard เดิม",
    updated: "2026-07-13T14:50:00+07:00",
    period_ytd: "01/01/2026 - 13/07/2026",
    source: "Pojjaman ERP (aagc.on.lk)",
    org: "HO: AAG Corporation (+child ทุกโปรเจกต์)",
    currency: "THB"
  },
  kpi: {
    stock_value:       null,
    stock_qty:         null,
    sales_receipt_ytd: 401038937.53,
    receipt_count:     323,
    receipt_retention: 8120712.04,
    ar_outstanding:    116010171.48,
    sales_billing_mtd: null,
    po_mtd:            null,
    gr_mtd:            null,
    gr_outstanding:    null
  },
  months: ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค."],
  sales_monthly:    { receipt: null },
  purchase_monthly: { po: null, gr: null },
  stock_monthly:    { value: null, qty: null },
  top_suppliers:    null
};
