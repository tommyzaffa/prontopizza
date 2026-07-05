FONT SELF-HOSTED — istruzioni (2 minuti)
=========================================

Il sito ora carica i font da questa cartella /fonts invece che da Google,
così l'IP dei visitatori non viene piu trasmesso a Google (privacy/GDPR).

Manca solo mettere qui i file .woff2. Come farlo:

1. Vai su:  https://gwfh.mranftl.com  (google-webfonts-helper)
2. Cerca e aggiungi questi 3 font, selezionando SOLO il charset "latin":

   - Playfair Display  -> stili: 500, 500 italic, 700
   - Caveat            -> stili: 500, 700
   - Lora              -> stili: regular (400), 500, italic (400 italic)

3. Scarica lo zip di ciascuno, prendi solo i file .woff2 e mettili qui
   dentro /fonts, RINOMINANDOLI esattamente cosi:

   playfair-display-500.woff2
   playfair-display-700.woff2
   playfair-display-500-italic.woff2
   caveat-500.woff2
   caveat-700.woff2
   lora-400.woff2
   lora-500.woff2
   lora-400-italic.woff2

   (I nomi devono combaciare con quelli in css/fonts.css)

4. Fatto. Apri il sito: i font devono apparire identici a prima.
   Finche i file non ci sono, il sito usa font di sistema (Georgia) come
   ripiego: funziona comunque, e' solo un po' meno curato esteticamente.

Nota: le licenze di Playfair Display, Caveat e Lora (SIL Open Font License)
permettono l'hosting sul proprio sito senza problemi.
