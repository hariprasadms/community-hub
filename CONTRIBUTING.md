# Contributing to UK Indian Community Hub

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## How to Contribute

### 1. Adding New Resources

To add a new resource to any category:

1. Fork the repository
2. Edit `index.html`
3. Find the appropriate category section
4. Add your resource following this template:

```html
<div class="resource-item">
    <div class="resource-title">Resource Name <span class="verified-badge">✓ Official</span></div>
    <a href="https://example.com" target="_blank" class="resource-link">example.com</a>
    <p class="resource-description">Brief description of what this resource provides</p>
</div>
```

**Badge Guidelines:**
- Use `✓ Official` for government websites (gov.uk, nhs.uk, etc.)
- Use `✓ Verified` for well-established organizations (Citizens Advice, Shelter, etc.)
- Omit badge for commercial or less-established resources

### 2. Adding New Categories

If you want to add a completely new category:

1. Choose an appropriate emoji icon
2. Add the category to the quick links section
3. Create the full category card following the existing structure
4. Update the README.md to list the new category

### 3. Fixing Bugs or Broken Links

1. Create an issue describing the problem
2. Fork the repository
3. Fix the issue
4. Submit a pull request referencing the issue

### 4. Improving Design or Functionality

1. Create an issue describing the proposed change
2. Wait for discussion/approval
3. Fork and implement
4. Submit pull request with screenshots/demo if applicable

## Code Standards

### HTML
- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Include meaningful alt text for images
- Keep accessibility in mind

### CSS
- Follow the existing naming conventions
- Use mobile-first responsive design
- Test on multiple screen sizes
- Avoid !important unless absolutely necessary

### JavaScript
- Use ES6+ features
- Write clear, commented code
- Test all interactive features
- Ensure compatibility with modern browsers

## Resource Quality Guidelines

### ✅ Good Resources
- Official government services
- Established non-profits and charities
- Reputable commercial services
- Active and maintained websites
- Clear, helpful information
- Accessible and user-friendly

### ❌ Avoid
- Expired or inactive websites
- Scam or questionable services
- Overly commercial/promotional content
- Websites with poor user experience
- Paywalled content (unless noted)
- Unverified information

## Testing Checklist

Before submitting a pull request, ensure:

- [ ] All links work and open correctly
- [ ] Resources are in the correct category
- [ ] Descriptions are clear and helpful
- [ ] Verified badges are used appropriately
- [ ] Mobile responsive design is maintained
- [ ] Search functionality still works
- [ ] No console errors
- [ ] Code follows existing style

## Pull Request Process

1. **Create a descriptive title**: e.g., "Add mental health resources" or "Fix broken NHS link"

2. **Describe your changes**: Explain what you added/changed and why

3. **Reference issues**: If fixing a reported issue, mention it: "Fixes #123"

4. **Screenshots**: Include before/after screenshots for visual changes

5. **Wait for review**: Maintainers will review and may request changes

## Community Standards

- Be respectful and constructive
- Focus on helping the community
- Verify information before submitting
- Respond to feedback graciously
- Help others when you can

## Questions?

- Open an issue for general questions
- Use discussions for community chat
- Tag maintainers for urgent issues

## Recognition

All contributors will be acknowledged in the project. Significant contributions may be highlighted in release notes.

---

Thank you for helping make this resource better for the Indian community in the UK! 🙏
