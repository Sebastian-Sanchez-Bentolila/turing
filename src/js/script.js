// =============================================
// FUNCIONALIDAD DEL MODAL DE SERVICIOS
// =============================================

/**
 * Abre el modal y muestra el contenido del servicio seleccionado
 * @param {string} service - Identificador del servicio a mostrar
 */
function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Configurar contenido según el servicio seleccionado
    switch(service) {
        case 'whatsapp-bot':
            modalTitle.textContent = 'Bot para WhatsApp (sin IA)';
            modalBody.innerHTML = `
                <h3>Ideal para:</h3>
                <ul>
                    <li>Atención básica al cliente</li>
                    <li>Gestión de reservas y citas</li>
                    <li>Respuestas a preguntas frecuentes</li>
                    <li>Derivación a agentes humanos cuando sea necesario</li>
                </ul>
                
                <h3>Funcionalidades:</h3>
                <ul>
                    <li>Menú interactivo con opciones predefinidas</li>
                    <li>Respuestas rápidas basadas en palabras clave</li>
                    <li>Posibilidad de derivar conversaciones a un agente humano</li>
                    <li>Configuración personalizada según tus necesidades</li>
                    <li>Integración con tu sistema actual (si aplica)</li>
                </ul>
                
                <h3>Proceso de desarrollo:</h3>
                <ol>
                    <li>Reunión inicial para definir requerimientos</li>
                    <li>Diseño del flujo de conversación</li>
                    <li>Programación del bot</li>
                    <li>Pruebas y ajustes</li>
                    <li>Implementación y capacitación</li>
                </ol>
                
                <p><strong>Tiempo de entrega estimado:</strong> 3-5 días hábiles</p>
                <p><strong>Garantía:</strong> 7 días posteriores a la entrega</p>
            `;
            break;
            
        case 'social-bot':
            modalTitle.textContent = 'Bot para Instagram/Facebook Messenger';
            modalBody.innerHTML = `
                <h3>Ideal para:</h3>
                <ul>
                    <li>Gestión de consultas frecuentes en redes sociales</li>
                    <li>Promociones y campañas automatizadas</li>
                    <li>Atención fuera de horario comercial</li>
                    <li>Segmentación de clientes mediante interacciones</li>
                </ul>
                
                <h3>Funcionalidades:</h3>
                <ul>
                    <li>Respuestas automáticas a mensajes directos</li>
                    <li>Menú con botones para guiar al usuario</li>
                    <li>Activación por palabras clave específicas</li>
                    <li>Recolección de datos básicos de contacto</li>
                    <li>Integración con herramientas de CRM</li>
                </ul>
                
                <h3>Proceso de desarrollo:</h3>
                <ol>
                    <li>Análisis de tus necesidades en redes sociales</li>
                    <li>Diseño de flujos conversacionales</li>
                    <li>Configuración de respuestas y palabras clave</li>
                    <li>Pruebas en entorno controlado</li>
                    <li>Implementación y monitoreo inicial</li>
                </ol>
                
                <p><strong>Tiempo de entrega estimado:</strong> 4-6 días hábiles</p>
                <p><strong>Garantía:</strong> 7 días posteriores a la entrega</p>
            `;
            break;
            
        case 'whatsapp-ia':
            modalTitle.textContent = 'Bot con IA para WhatsApp';
            modalBody.innerHTML = `
                <h3>Ideal para:</h3>
                <ul>
                    <li>Soporte técnico avanzado</li>
                    <li>Asistentes virtuales 24/7</li>
                    <li>Atención al cliente con respuestas contextuales</li>
                    <li>Procesamiento de lenguaje natural</li>
                </ul>
                
                <h3>Funcionalidades:</h3>
                <ul>
                    <li>Conversación abierta con inteligencia artificial</li>
                    <li>Comprensión de lenguaje natural</li>
                    <li>Respuestas contextuales basadas en conversación previa</li>
                    <li>Entrenamiento personalizado con tus datos</li>
                    <li>Integración con bases de conocimiento</li>
                    <li>Posibilidad de derivar a humano cuando sea necesario</li>
                </ul>
                
                <h3>Proceso de desarrollo:</h3>
                <ol>
                    <li>Reunión inicial para definir alcance y necesidades</li>
                    <li>Recopilación y preparación de datos para entrenamiento</li>
                    <li>Entrenamiento del modelo de IA</li>
                    <li>Pruebas iterativas y ajustes</li>
                    <li>Implementación y capacitación</li>
                </ol>
                
                <p><strong>Tiempo de entrega estimado:</strong> 7-10 días hábiles</p>
                <p><strong>Garantía:</strong> 7 días posteriores a la entrega</p>
                <p><strong>Nota:</strong> Este servicio requiere datos específicos de tu negocio para el entrenamiento óptimo del bot.</p>
            `;
            break;
    }
    
    // Mostrar modal y deshabilitar scroll
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de servicios
 */
function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        closeModal();
    }
}

// =============================================
// SCROLL SUAVE Y COMPORTAMIENTO DEL HEADER
// =============================================

// Configurar scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hacer el header sticky y cambiar su opacidad al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 100 
        ? 'rgba(26, 26, 26, 0.95)' 
        : 'rgba(26, 26, 26, 0.9)';
});

// =============================================
// RESALTADO DE ENLACES ACTIVOS
// =============================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function() {
    let current = '';
    
    // Identificar la sección actual
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    // Resaltar enlace correspondiente
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// =============================================
// FUNCIONALIDAD DE FAQ
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Alternar visibilidad de respuestas FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Mostrar/ocultar respuesta
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.padding = '0 20px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '20px';
                icon.style.transform = 'rotate(180deg)';
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Cerrar otras respuestas en la misma categoría
            const parentCategory = this.closest('.faq-category');
            parentCategory.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer) {
                    ans.style.maxHeight = null;
                    ans.style.padding = '0 20px';
                    ans.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });
        });
    });
    
    // Filtro de categorías FAQ
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Actualizar botón activo
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar categoría seleccionada
            const category = this.getAttribute('data-category');
            document.querySelectorAll('.faq-category').forEach(cat => {
                cat.style.display = cat.id === category ? 'block' : 'none';
                if (cat.id === category) {
                    setTimeout(() => cat.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                }
            });
        });
    });
    
    // Abrir categoría específica desde el hash de la URL
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const validCategories = ['general', 'servicios', 'pagos', 'soporte'];
        
        if (validCategories.includes(hash)) {
            const btn = document.querySelector(`.category-btn[data-category="${hash}"]`);
            if (btn) btn.click();
            
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }
});

// =============================================
// ANIMACIÓN DE ESTADÍSTICAS
// =============================================

/**
 * Anima los números en la sección "About"
 */
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const count = parseInt(stat.innerText);
        const increment = target / speed;
        
        if(count < target) {
            stat.innerText = Math.floor(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target;
        }
    });
}

// Observar la sección "About" para activar la animación cuando sea visible
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.5});

observer.observe(aboutSection);

// =============================================
// MENÚ MÓVIL
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navElement = document.querySelector('nav');
    const navOverlay = document.createElement('div');
    
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    
    if (menuToggle && navElement) {
        // Alternar menú móvil
        menuToggle.addEventListener('click', function() {
            navElement.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            // Cambiar icono
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Cerrar menú al hacer clic en overlay
        navOverlay.addEventListener('click', function() {
            navElement.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('no-scroll');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
        
        // Cerrar menú al seleccionar un enlace (solo en móvil)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navElement.classList.remove('active');
                    navOverlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }
});
