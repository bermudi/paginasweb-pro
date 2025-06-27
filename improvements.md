## 1. **Componente Pricing.tsx - Tarjetas de Precios**

```tsx
// Reemplazar el grid actual con mejor control de altura
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
  {pricingPlans.map((plan, index) => (
    <motion.article
      key={index}
      className={`glass rounded-2xl p-6 md:p-8 flex flex-col min-h-[480px] ${
        selectedPackage === plan.name ? 'ring-2 ring-accent' : ''
      }`}
    >
      {/* Contenedor de contenido con flex-grow */}
      <div className="flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">{plan.name}</h3>
          <p className="text-primary/80 mb-4 min-h-[3rem] line-clamp-3">{plan.description}</p>
          {/* Precio con tamaño responsivo */}
          <div className="flex items-baseline mb-6">
            <span className="text-3xl md:text-4xl font-bold">${plan.price.toLocaleString()}</span>
            <span className="text-primary/60 ml-2 text-sm md:text-base">/proyecto</span>
          </div>
        </div>
        
        {/* Lista de características con altura consistente */}
        <div className="flex-grow">
          <ul className="space-y-2 md:space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-primary/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Botón siempre al final */}
      <motion.button
        onClick={() => handlePackageSelect(plan.name)}
        className={`w-full py-3 px-4 md:px-6 rounded-lg font-medium transition-colors mt-6 ${
          selectedPackage === plan.name
            ? 'bg-accent text-black'
            : 'bg-primary text-white hover:bg-primary/90'
        }`}
      >
        {selectedPackage === plan.name ? 'Paquete Seleccionado' : 'Empezar ahora'}
      </motion.button>
    </motion.article>
  ))}
</div>
```

## 2. **Componente Addons.tsx - Tarjetas de Complementos**

```tsx
// Mejorar el grid y las tarjetas
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
  <AnimatePresence mode="wait">
    {paginatedAddons.map((addon) => (
      <motion.div
        key={addon.name}
        className="glass rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col min-h-[400px]"
      >
        {/* Categoría */}
        <div className="mb-3 md:mb-4">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200/80 inline-block">
            {addon.category}
          </span>
        </div>
        
        {/* Contenido con flex-grow */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{addon.name}</h3>
          <p className="text-sm md:text-base text-primary/80 mb-4 line-clamp-3">
            {addon.description}
          </p>
          
          {/* Precio */}
          <div className="flex items-baseline mb-4">
            <span className="text-xl md:text-2xl font-bold">${addon.price.toLocaleString()}</span>
            <span className="text-primary/60 ml-2 text-sm">/complemento</span>
          </div>
          
          {/* Lista de características con scroll si es necesario */}
          <div className="flex-grow overflow-y-auto mb-4 max-h-[150px] md:max-h-[200px]">
            <ul className="space-y-1.5 md:space-y-2">
              {addon.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-primary/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Botón siempre al final */}
        <motion.button
          onClick={() => handleAddonToggle(addon.name)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm md:text-base ${
            selectedAddons.includes(addon.name)
              ? 'bg-accent text-black'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          {selectedAddons.includes(addon.name) ? (
            <>
              <Check className="w-4 h-4" />
              Seleccionado
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Agregar
            </>
          )}
        </motion.button>
      </motion.div>
    ))}
  </AnimatePresence>
</div>
```

## 3. **Componente Projects.tsx - Tarjetas de Proyectos**

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
  {projects.map((project, index) => (
    <motion.article
      key={index}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl flex flex-col h-full"
    >
      {/* Imagen con aspect ratio consistente */}
      <a href={project.link} className="block relative pb-[75%] overflow-hidden">
        <img
          srcSet={`${project.image.small} 400w, ${project.image.large} 800w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={project.image.large}
          alt={project.title}
          className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
      </a>
      
      {/* Contenido con altura flexible */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
          <p className="text-sm md:text-base text-primary/80 line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Link siempre al final */}
        <div className="mt-4 md:mt-6">
          <a
            href={project.link}
            className="text-primary font-medium hover:opacity-70 transition-opacity inline-flex items-center gap-1 text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  ))}
</div>
```

## 4. **Componente Services.tsx - Tarjetas de Servicios**

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
  {services.map((service, index) => (
    <motion.article
      key={index}
      className="glass rounded-2xl p-6 md:p-8 flex flex-col min-h-[280px]"
    >
      {/* Icono */}
      <div className="mb-4 md:mb-6 inline-block p-3 bg-accent rounded-xl w-fit">
        {React.cloneElement(service.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
      </div>
      
      {/* Contenido */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 line-clamp-2">
          {service.title}
        </h3>
        <p className="text-sm md:text-base text-primary/80 line-clamp-4">
          {service.description}
        </p>
      </div>
    </motion.article>
  ))}
</div>
```

## 5. **Componente Contact.tsx - Mejorar Botones Responsivos**

```tsx
<motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
  <motion.button
    type="submit"
    disabled={isSubmitting}
    className="flex-1 bg-black text-white px-4 md:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-black/90 transition-colors text-sm md:text-base"
  >
    <Send className="w-4 h-4 md:w-5 md:h-5" />
    <span>Enviar Mensaje</span>
  </motion.button>
  
  <motion.button
    type="button"
    onClick={handleWhatsAppClick}
    className="flex-1 sm:flex-initial bg-green-500 text-white px-4 md:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors text-sm md:text-base"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current">
      {/* SVG path */}
    </svg>
    <span className="sm:inline">WhatsApp</span>
  </motion.button>
  
  <motion.a
    href="tel:+524428908205"
    className="flex-1 sm:flex-initial bg-blue-500 text-white px-4 md:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors text-sm md:text-base"
  >
    <Phone className="w-4 h-4 md:w-5 md:h-5" />
    <span className="sm:inline">Llamar</span>
  </motion.a>
</motion.div>
```

## 6. **Utilidad CSS Global para Line Clamp**

Agregar en `index.css`:

```css
@layer utilities {
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

## 7. **Mejoras Adicionales de Responsividad**

### Hero.tsx
```tsx
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/10">
```

### BottomBar.tsx
```tsx
<div className="max-w-6xl mx-auto px-3 py-2 md:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
```

Estas mejoras garantizarán:
- **Tamaños de tarjeta consistentes** usando `min-h`, `flex-grow` y `auto-rows-fr`
- **Mejor responsividad** con breakpoints más granulares (`sm:`, `md:`, `lg:`)
- **Texto truncado apropiadamente** con `line-clamp`
- **Espaciado responsivo** ajustando padding y gaps según el tamaño de pantalla
- **Imágenes con aspect ratio consistente** usando contenedores con `pb-[75%]`