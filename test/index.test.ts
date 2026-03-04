// ZIP Archive
//      ↓
// Extract PDFs
//      ↓
// Parse PDF Content
//      ↓
// Apply Conversion Parameters
//      ↓
// Generate Excel File
// test cases to write
import { describe, it, expect } from "@effect/vitest";
import { Effect, Layer } from "effect";
import { separateCreditNote } from "../src/shaprator";

// test for extrac pdf
describe("separateCreditNote", () => {
  it.effect("Should Shaprate Credit Note", () =>
    Effect.gen(function* () {
      const data =
        "Terms & Conditions:\nTax is not payable on reverse charge basis\nThis is a computer generated invoice and does not require signature\nIncludes discounts for your city, limited returns and/or for online payments (as applicable)\nOriginal For Recipient\nCredit Note\nOrder Number: 164621519748682432\nOrder Date: 12-06-2025 11:58:54\nCredit Note No: dyq4z26C104\nCredit Note Date: 12-06-2025 12:04:11\nInvoice No and Date: dyq4z26643 12-06-2025 11:58:54\nSOLD BY:\nSRI SAKTHI AROMATIC\nChennai, Tamil Nadu, 600052\nGSTIN : 33AEOFS1385J1ZM\nBILL TO:\nHanif\nPlace of Supply : 33 Tamil Nadu\nSHIP TO:\nHanif\nNear Ambalar Kittangi , 19/333,North Street,\nKilakarai, Ramanathapuram District,\nKeelakarai, Keelakarai, Tamil Nadu, 623517\nSN. Description HSN Qty. Gross\nAmount\nDiscount Taxable\nValue\nTaxes Total\n1 Thennai TT 50g Sambrani\nNelli | Crushed Yellow\nBenzoin Crystals (Pack of 5 -\n50 Grams Each Pack) - Free\nSize\n330741 1 Rs.176.00 Rs.21.00 Rs.147.62 SGST @2.5% :Rs.3.69\nCGST @2.5% :Rs.3.69\nRs.155.00\nTotal Rs.7.38 Rs.155";
        const clean = data.replace(/\r/g, "").trim();
      
      const pdf = yield* separateCreditNote(clean);
      
      expect(pdf.credit_note).toContain(`Order Number: 164621519748682432`)
      expect(pdf.sold_by).toContain(`SOLD BY`)
      expect(pdf.ship_to).toContain("SHIP TO")
    }),
  );
});

// anotehr test case for in
