
# TechFuse Style Reference

## Core Colors
```
:root {
  /* Core Colors (Extracted from TechFuse.jpg) */
  --color-tf-bg-primary: #0C143B;   /* Dark Navy/Indigo Background */
  --color-tf-bg-secondary: #162A6B; /* Subtle Dark Blue Pattern/Card Background */
  --color-tf-accent: #00FFFF;       /* Electric Cyan/Teal Accent */
  --color-tf-text-light: #FFFFFF;    /* Pure White Text/Headings */

  /* Map Tailwind defaults to our custom variables for easy use */
  --background-primary: var(--color-tf-bg-primary);
  --accent-color: var(--color-tf-accent);
}

## Custom Utility Classes

.bg-tf-primary {
  background-color: var(--color-tf-bg-primary);
}

.text-tf-accent {
  color: var(--color-tf-accent);
}

.bg-tf-radial-pattern {
  background: radial-gradient(
    at 50% 100%, 
    var(--color-tf-bg-secondary) 10%, 
    var(--color-tf-bg-primary) 70%
  ),
  var(--color-tf-bg-primary);
}

## Sample Card Styling

.card {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  color: var(--color-tf-text-light);
}
```
## Usage Examples

### Background Examples
<div style="background-color:#0C143B; padding:10px; margin-bottom:5px;">.bg-tf-primary</div>
<div style="background:radial-gradient(at 50% 100%, #162A6B 10%, #0C143B 70%); padding:10px; margin-bottom:5px;">.bg-tf-radial-pattern</div>

### Text Accent Example
<span style="color:#00FFFF;">This text uses .text-tf-accent</span>

### Sample Card
<div style="background:radial-gradient(at 50% 100%, #162A6B 10%, #0C143B 70%); padding:10px; border-radius:5px; color:white;">
  This is a sample card with background pattern and white text.
</div>
