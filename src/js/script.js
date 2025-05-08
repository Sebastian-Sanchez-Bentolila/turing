// Modal functionality
function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Set content based on service
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
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    }
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle answer visibility with smooth animation
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.padding = '0 20px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '20px';
                icon.style.transform = 'rotate(180deg)';
                
                // Smooth scroll to the question
                this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Close other answers in the same category
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
    
    // FAQ Category Filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected category and hide others
            const category = this.getAttribute('data-category');
            document.querySelectorAll('.faq-category').forEach(cat => {
                if (cat.id === category) {
                    cat.style.display = 'block';
                    
                    // Scroll to the category title
                    setTimeout(() => {
                        cat.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });
    
    // Open specific category from URL hash
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const validCategories = ['general', 'servicios', 'pagos', 'soporte'];
        
        if (validCategories.includes(hash)) {
            const btn = document.querySelector(`.category-btn[data-category="${hash}"]`);
            if (btn) btn.click();
            
            // Scroll to the category after a short delay
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }
});