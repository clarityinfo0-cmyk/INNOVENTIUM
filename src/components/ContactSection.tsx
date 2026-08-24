import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  RefreshCw,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectType: 'Desarrollo I+D desde Cero',
    challengeDescription: '',
    requestNDA: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Desarrollo I+D desde Cero',
    'Prototipado y Validación TRL 4-7',
    'Blindaje de Patente & IP (PCT)',
    'Transferencia Tecnológica Industrial',
    'Alianza Científica Universitaria',
    'Consultoría en Inteligencia Artificial'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const details = [
      `Nombre: ${formData.name.trim()}`,
      `Organización: ${formData.organization.trim()}`,
      `Correo: ${formData.email.trim()}`,
      `Teléfono: ${formData.phone.trim() || 'No indicado'}`,
      `Iniciativa: ${formData.projectType}`,
      `Solicita NDA: ${formData.requestNDA ? 'Sí' : 'No'}`,
      '',
      'Descripción:',
      formData.challengeDescription.trim(),
    ].join('\n');
    window.location.href = `mailto:contacto@innoventium.tech?subject=${encodeURIComponent('Consulta desde innoventium.tech')}&body=${encodeURIComponent(details)}`;
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      projectType: 'Desarrollo I+D desde Cero',
      challengeDescription: '',
      requestNDA: true,
    });
  };

  return (
    <section 
      id="contacto"
      className="relative py-28 sm:py-36 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Background dynamic light gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-gradient-to-tr from-[#00B4D8]/15 via-[#7B6CF6]/10 to-[#0B1D36]/30 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1D36] border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-mono mb-4 shadow-[0_0_20px_rgba(0,180,216,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>ALIANZAS & PROYECTOS I+D</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight"
          >
            El futuro se construye hoy.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-[#00B4D8] font-display font-semibold"
          >
            Cada innovación comienza con una decisión.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Trabajemos juntos para convertir ideas en soluciones que transformen industrias.
          </motion.p>
        </div>

        {/* Dual Column Layout: Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Confidentiality Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Cards */}
            <div className="p-8 rounded-3xl bg-[#0B1D36]/90 border border-white/10 backdrop-blur-xl space-y-6">
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Canales Directos de Innovación</span>
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Recepción de Propuestas I+D</p>
                  <p className="text-sm font-semibold text-white mt-0.5">contacto@innoventium.tech</p>
                  <p className="text-xs text-slate-400">investigacion@innoventium.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#7B6CF6]/10 text-[#7B6CF6] border border-[#7B6CF6]/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Línea Directa de Laboratorios</p>
                  <p className="text-sm font-semibold text-white mt-0.5">+1 (800) 940-INNOV</p>
                  <p className="text-xs text-slate-400">Atención personalizada a directores de tecnología</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#E8C547]/10 text-[#E8C547] border border-[#E8C547]/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Hub Científico Principal</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Parque de Innovación y Tecnología</p>
                  <p className="text-xs text-slate-400">Red Global de Laboratorios Asociados</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Tiempo de Respuesta</p>
                  <p className="text-sm font-semibold text-white mt-0.5">&lt; 24 Horas Hábiles</p>
                  <p className="text-xs text-slate-400">Dictamen preliminar por equipo técnico</p>
                </div>
              </div>
            </div>

            {/* Redes Sociales & Canales Directos (WhatsApp, Facebook, Instagram) */}
            <div className="p-6 rounded-3xl bg-[#0B1D36]/90 border border-[#00B4D8]/30 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#00B4D8] font-bold flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Contacto Inmediato & Redes</span>
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30 font-semibold">
                  Activo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/?text=Hola%20equipo%20de%20INNOVENTIUM,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20proyectos%20de%20I%2BD."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-contact-whatsapp"
                  className="p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 hover:border-[#25D366] transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                >
                  <WhatsAppIcon size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold font-sans">WhatsApp</span>
                  <span className="text-[10px] font-mono opacity-80 group-hover:opacity-100">Chat 1-a-1</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-contact-facebook"
                  className="p-3.5 rounded-2xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 hover:border-[#1877F2] transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
                >
                  <FacebookIcon size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold font-sans">Facebook</span>
                  <span className="text-[10px] font-mono opacity-80 group-hover:opacity-100">Comunidad</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-contact-instagram"
                  className="p-3.5 rounded-2xl bg-[#E4405F]/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-[#E4405F] hover:text-white border border-[#E4405F]/30 hover:border-[#E4405F] transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(228,64,95,0.4)]"
                >
                  <InstagramIcon size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold font-sans">Instagram</span>
                  <span className="text-[10px] font-mono opacity-80 group-hover:opacity-100">@innoventium</span>
                </a>
              </div>
            </div>

            {/* NDA & IP Protection Shield Banner */}
            <div className="p-6 rounded-2xl bg-[#0B1D36] border border-[#00B4D8]/30 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#00B4D8]/20 text-[#00B4D8] border border-[#00B4D8]/40 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display mb-1">
                  Confidencialidad y solicitud de NDA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No envíes información sensible mediante este formulario. Puedes solicitar un acuerdo de confidencialidad antes de compartir detalles técnicos con el equipo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Proposal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1D36] border border-[#00B4D8]/40 backdrop-blur-2xl shadow-[0_0_50px_-10px_rgba(0,180,216,0.3)] relative">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2ECC71]/20 border-2 border-[#2ECC71] text-[#2ECC71] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(46,204,113,0.5)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      Consulta preparada
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                      Abrimos tu aplicación de correo con los datos de la consulta. Revísalos y envía el mensaje cuando estés listo; el sitio no almacena esta información.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono flex items-center gap-2 border border-white/10 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Enviar otra consulta</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-state"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">
                          Iniciar Proyecto o Alianza
                        </h3>
                        <p className="text-xs text-slate-400">
                          Completa el formulario para agendar una sesión con nuestro equipo científico.
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-[#00B4D8] font-bold">
                        Paso 1 de 1
                      </span>
                    </div>

                    {/* Project Type Selector */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        Tipo de Iniciativa o Desafío:
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1D36] border border-white/15 text-slate-200 text-sm focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8] transition-all font-sans cursor-pointer"
                      >
                        {projectTypes.map((pt) => (
                          <option key={pt} value={pt} className="bg-[#0B1D36] text-slate-200">
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name & Organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Nombre y Apellidos *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value.slice(0, 100) })}
                          maxLength={100}
                          placeholder="Ej: Dr. Roberto Méndez"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0B1D36] border border-white/15 text-slate-200 text-sm focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8] transition-all placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Empresa u Organización *
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value.slice(0, 120) })}
                          maxLength={120}
                          placeholder="Ej: Nexa Energy Industries"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0B1D36] border border-white/15 text-slate-200 text-sm focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8] transition-all placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Correo Institucional / Profesional *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nombre@empresa.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0B1D36] border border-white/15 text-slate-200 text-sm focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8] transition-all placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                          Teléfono de Contacto
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.slice(0, 30) })}
                          maxLength={30}
                          placeholder="+34 600 000 000"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0B1D36] border border-white/15 text-slate-200 text-sm focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8] transition-all placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Challenge Description */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                        Descripción General del Desafío o Necesidad Tecnológica *
                      </label>
                      <textarea
                        id="contact-challenge-desc"
                        required
                        rows={3}
                        value={formData.challengeDescription}
                        onChange={(e) => setFormData({ ...formData, challengeDescription: e.target.value.slice(0, 2500) })}
                        maxLength={2500}
                        placeholder="Describe el reto técnico, objetivo del proyecto o impacto esperado..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0B1D36] border border-white/15 text-slate-200 text-sm focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8] transition-all placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    {/* NDA Checkbox */}
                    <div className="flex items-center gap-3 pt-1">
                      <input
                        id="contact-nda-checkbox"
                        type="checkbox"
                        checked={formData.requestNDA}
                        onChange={(e) => setFormData({ ...formData, requestNDA: e.target.checked })}
                        className="w-4 h-4 rounded border-white/20 bg-[#0B1D36] text-[#00B4D8] focus:ring-[#00B4D8]"
                      />
                      <label htmlFor="contact-nda-checkbox" className="text-xs text-slate-300 cursor-pointer">
                        Deseo adjuntar un Acuerdo de Confidencialidad Mutuo (NDA) antes de la primera sesión técnica.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="btn-submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold text-white text-sm sm:text-base bg-gradient-to-r from-[#00B4D8] to-[#7B6CF6] hover:from-[#00B4D8] hover:to-[#0B1D36] transition-all shadow-[0_0_30px_rgba(0,180,216,0.4)] hover:shadow-[0_0_40px_rgba(0,180,216,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Procesando Solicitud I+D...</span>
                        </>
                      ) : (
                        <>
                          <span>Contáctanos</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
