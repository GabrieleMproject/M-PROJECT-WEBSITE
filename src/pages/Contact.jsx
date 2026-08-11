import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    '🏢 Sviluppo Piattaforma Web / SaaS',
    '📱 Sviluppo App Mobile',
    '🌐 Realizzazione Sito Web / Vetrina',
    '⚙️ Consulenza IT & Automazione',
    '🎫 Biglietteria ed Eventi (TicketFast)',
    '💡 Altro / Richiesta Generica'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore durante l\'invio del messaggio.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', service: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="flex-grow pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Mettiamoci in <span className="text-blue-600">Contatto</span>.
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Hai un progetto in mente o vuoi digitalizzare la tua azienda? Compila il form qui sotto e ti risponderemo al più presto.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          {/* Info Side */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-8 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Le nostre sedi</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Sede Legale</h4>
                  <p className="text-gray-700 font-medium">Via Civati 23<br/>22031 Albavilla (CO)</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Dati Societari</h4>
                  <p className="text-gray-700 font-medium">P.IVA: 0431 4510134</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Contatti Ufficiali</h4>
                  <p className="text-gray-700 font-medium">Email: <a href="mailto:info@mprojectsrl.it" className="text-blue-600 hover:underline">info@mprojectsrl.it</a></p>
                  <p className="text-gray-700 font-medium">PEC: <span className="text-gray-600">infomproject.pec</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Messaggio inviato!</h3>
                  <p className="text-lg text-gray-600 font-light mb-8">
                    Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome e Cognome *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                        placeholder="mario@azienda.it"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Servizio di interesse</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Seleziona un'area di interesse...</option>
                      {services.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Oggetto</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                      placeholder="Richiesta informazioni..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Messaggio *</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                      placeholder="Descrivi brevemente il tuo progetto o la tua richiesta..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      required 
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-500 leading-relaxed cursor-pointer">
                      Dichiaro di aver letto la <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per la gestione della richiesta. *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Invio in corso...
                      </>
                    ) : (
                      'Invia Richiesta'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
