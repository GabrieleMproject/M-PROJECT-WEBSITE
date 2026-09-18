const fs = require('fs');
let jsx = fs.readFileSync('src/pages/CondoFast.jsx', 'utf8');

// Replace the Cloud Integrato Title & Subtitle
jsx = jsx.replace("Perché costa così poco? Il segreto del Cloud Integrato", "Come funziona l'Ecosistema Cloud Integrato");
jsx = jsx.replace("Abbatti i costi del software spostando il valore sui servizi telematici per i condomìni.", "Innovazione e digitalizzazione per i tuoi stabili, massima efficienza economica per il tuo Studio.");

// Replace Block 1
jsx = jsx.replace("Canone Simbolico</div>", "Piattaforma Centralizzata</div>");
jsx = jsx.replace("Lo Studio gode di tariffe B2B quasi azzerate per l'utilizzo del gestionale CondoFAST.", "Lo Studio accede all'infrastruttura CondoFAST a condizioni B2B agevolate, ottimizzando l'intera gestione contabile.");

// Replace Block 2
jsx = jsx.replace("Servizi a Bilancio</div>", "Servizi Dedicati al Condominio</div>");
jsx = jsx.replace("I pacchetti telematici (es. Privacy, App) vengono approvati in assemblea e fatturati al condominio ex Art. 1130 c.c.", "L'infrastruttura tecnologica (App, GDPR, Voto Online) viene erogata a favore dei condòmini e regolarmente imputata a bilancio (ex Art. 1130 c.c.).");

// Replace Block 3
jsx = jsx.replace("Tutti Vincono</div>", "Valore Condiviso</div>");
jsx = jsx.replace("Tu abbatti i costi fissi. I condòmini ricevono un'App Premium dedicata. Zero frizione.", "Massima trasparenza ed evoluzione digitale per i residenti, massima efficienza operativa per l'Amministratore.");

// Replace Decoy Plan text
jsx = jsx.replace("Preferisci accollarti interamente i costi sullo Studio?</h4>", "Gestione Tradizionale (Solo Licenza Studio)</h4>");
jsx = jsx.replace("Nessun adempimento e presidio normativo sui condomìni. Il software diventa un costo puro per il tuo Studio. Scegli il piano Standard.", "La soluzione classica per gli Studi che preferiscono accentrare i costi dell'infrastruttura gestionale, senza l'attivazione di servizi Cloud aggiuntivi per i residenti.");

fs.writeFileSync('src/pages/CondoFast.jsx', jsx, 'utf8');
console.log("Updated JSX copy.");
