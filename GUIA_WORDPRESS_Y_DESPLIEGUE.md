# GUÍA DE IMPLEMENTACIÓN: SISCAT RENOVADA
## Plataforma de Cotizaciones por Módulos (Sistemas, Catastro y Contabilidad) + WhatsApp

Esta guía detalla cómo utilizar la nueva plataforma desarrollada y cómo replicar exactamente esta estructura dentro de tu instalación actual de **WordPress** utilizando herramientas 100% gratuitas.

---

## 1. Estructura de Módulos Creada

La solución divide la oferta de valor de SISCAT en 3 módulos correspondientes a los 3 socios de la compañía:

| Módulo | Socio Responsable | Servicios Clave | Correo de Destino | WhatsApp |
|---|---|---|---|---|
| **Módulo 1** | **Ingeniero de Sistemas** | Software de Facturación AQUARIUS, PDA móvil, Cloud & TI | `sistemas@siscat.com.co` | `+57 322 427 8578` |
| **Módulo 2** | **Ingeniero Catastral** | Estudios CRA 825/943, Avalúos RAA, Catastro de Redes | `catastro@siscat.com.co` | `+57 310 200 9970` |
| **Módulo 3** | **Contador Público** | Cargue SUI SuperServicios, NIIF, Estados Financieros | `contabilidad@siscat.com.co` | `+57 322 427 8578` |

---

## 2. Cómo funciona el Sistema de Cotizaciones

1. **Selección del Módulo:** El usuario ingresa al módulo de su necesidad o usa el selector del formulario.
2. **Formulario Dinámico:** Los campos se adaptan al tipo de profesional (ej. si es Sistemas pregunta por número de suscriptores y PDA; si es Catastral pregunta por área, tipo de predio o red; si es Contabilidad pregunta por tipo de prestador y periodicidad SUI).
3. **Enrutamiento Automático de Correo:** Al hacer clic en "Enviar Cotización", la solicitud se despacha a la dirección de correo del socio respectivo con todos los datos tabulados.
4. **Resumen Digital y Copia a WhatsApp:** El sistema genera un recibo digital interactivo y le ofrece al usuario el botón *"Confirmar por WhatsApp"*, el cual abre WhatsApp con el mensaje ya estructurado para el socio correspondiente.
5. **Panel de Configuración:** Puedes cambiar en cualquier momento los correos y teléfonos de los 3 socios desde el ícono de tuerca en el encabezado o pie de página.

---

## 3. Cómo Implementar esta misma Solución en tu WordPress Actual (Gratis)

Si deseas aplicar estos mismos cambios directamente dentro de tu WordPress actual (`https://www.siscat.com.co/`):

### Paso A: Mejorar el Diseño Visual (Gratis)
1. **Tema Recomendado:** Instala el tema **Astra** o **Hello Elementor** (ambos son gratuitos, ultralivianos y modernos, reemplazando el tema actual Twenty Sixteen).
2. **Maquetador Visual:** Instala el plugin gratuito **Elementor Website Builder**. Te permitirá crear secciones tipo "Hero", tarjetas de servicios e iconos llamativos sin programar.

### Paso B: Crear los Módulos de Cotización por Correo (Gratis)
Usa el plugin **Forminator** (de WPMU DEV) o **WPForms**:
1. Instala **Forminator** desde *Plugins > Añadir nuevo* (es 100% gratuito y no limita funciones condicionales).
2. Crea un nuevo formulario llamado *"Cotizaciones SISCAT"*.
3. Agrega un campo desplegable (Select) llamado *"Profesional o Especialidad"* con 3 opciones:
   - `Ingeniería de Sistemas (AQUARIUS & TI)`
   - `Ingeniería Catastral (Tarifas CRA & Avalúos)`
   - `Contaduría Pública (Cargue SUI & NIIF)`
4. Agrega los campos de contacto: Nombre, Empresa, Teléfono/WhatsApp, Municipio y Descripción.
5. En la pestaña **Email Notifications (Notificaciones por Correo)**:
   - Configura una regla de **Enrutamiento Condicional**:
     - Si la opción es *Sistemas*, enviar a: `sistemas@siscat.com.co`
     - Si la opción es *Catastral*, enviar a: `catastro@siscat.com.co`
     - Si la opción es *Contaduría*, enviar a: `contabilidad@siscat.com.co`
   - Configura una notificación de confirmación al correo del cliente.

### Paso C: Botón de WhatsApp Multi-Socio (Gratis)
Instala el plugin gratuito **Joinchat** o **Chaty**:
1. Permite configurar múltiples números de teléfono (canales).
2. Agrega los 3 agentes con foto o avatar:
   - Agente 1: *Ing. de Sistemas* -> Teléfono 322 427 8578 -> Mensaje predeterminado: *"Hola, deseo cotizar software/facturación"*
   - Agente 2: *Ing. Catastral* -> Teléfono 310 200 9970 -> Mensaje predeterminado: *"Hola, requiero cotización sobre tarifas CRA/avalúos"*
   - Agente 3: *Contador Público* -> Teléfono 322 427 8578 -> Mensaje predeterminado: *"Hola, requiero asesoría para cargue al SUI/contabilidad"*
3. El botón flotante aparecerá en toda la página y al hacer clic desplegará la lista de los 3 socios.

### Paso D: Configurar el Envío Fiable de Correos (Gratis)
Para evitar que los correos enviados por WordPress caigan en la carpeta de SPAM:
1. Instala el plugin gratuito **WP Mail SMTP**.
2. Conéctalo con el servicio de correo corporativo de tu hosting (cPanel Webmail de `siscat.com.co`) o mediante una cuenta gratuita de Gmail / Brevo (Sendinblue).

---

## 4. Cómo Incrustar la Nueva Aplicación en WordPress

Si prefieres usar la nueva plataforma web moderna que acabamos de compilar (ubicada en `siscat-renovada/dist`):

### Opción 1: Despliegue en subdominio o carpeta (Recomendado)
- Sube el contenido de la carpeta `dist/` a tu hosting cPanel en una carpeta (ejemplo: `public_html/portal/` o en el subdominio `cotizador.siscat.com.co`).
- Quedará cargando a velocidad ultrarrápida (menos de 1 segundo).

### Opción 2: Incrustar mediante Iframe en cualquier página de WordPress
Crea una nueva página en WordPress y agrega un bloque de **HTML Personalizado**:
```html
<iframe 
  src="https://tu-dominio-o-subdominio.com" 
  style="width: 100%; height: 100vh; border: none; overflow: hidden;"
  title="SISCAT Portal de Cotizaciones">
</iframe>
```

---

## 5. Comandos para Ejecutar y Compilar

En la consola:
```powershell
# Ingresar al directorio del proyecto
cd C:\Users\johathan.granobles\.gemini\antigravity\scratch\siscat-renovada

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (genera la carpeta dist/)
npm run build

# Previsualizar la versión de producción
npm run preview
```
