# 🌲 Portland Day Planner 🌲

A fun, interactive web application that helps you overcome decision paralysis and plan your perfect day in Portland, Oregon! Spin the colorful wheels to get random suggestions for activities, food, outdoor adventures, and evening entertainment options.

[**🎯 Live Demo**](https://itwasmattgregg.github.io/Portland-Day-Planner/)

## ✨ Features

- **🎲 Interactive Spinners**: Four colorful wheels for different parts of your day
- **🍽️ Food Options**: Get suggestions for coffee shops, food carts, breweries, and more
- **🎯 Activities**: Random ideas for museums, parks, bookstores, art galleries, and other attractions
- **🌿 Outdoor Adventures**: Suggestions for Forest Park, the waterfront, rose gardens, and hiking trails
- **🌙 Evening Entertainment**: Random picks for cocktail bars, theaters, comedy shows, and night markets
- **🎊 Fun Effects**: Confetti celebration when you plan your day
- **📱 Responsive Design**: Works great on desktop and mobile devices

## 🚀 How to Use

1. **Visit the live demo** or open `index.html` in your browser
2. **Click "🎲 Plan My Day!"** to spin all wheels at once, or click individual spinners
3. **Watch the magic happen** as each wheel spins to a random option
4. **See your randomized Portland day plan** appear in the results section
5. **Use the reset button** to get new random suggestions anytime!

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Clean, efficient code with ES6+ features
- **CSS Custom Properties**: For smooth spinner rotation tracking

### Key Features
- **Independent Spinner Rotation**: Each wheel maintains its own rotation state
- **Smooth CSS Transitions**: Elegant 2-second spin animations
- **Random Selection Algorithm**: Fair distribution across all options
- **Mobile-First Responsive Design**: Optimized for all screen sizes
- **No Dependencies**: Pure vanilla code, no frameworks required

### File Structure
```
Portland Day Planner/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Interactive functionality
└── README.md          # Project documentation
```

## 🎨 Design Highlights

- **Beautiful Gradient Backgrounds**: Purple-blue gradient with smooth transitions
- **Colorful Pie-Chart Spinners**: Each segment has a unique vibrant color
- **Smooth Animations**: CSS transitions and keyframe animations
- **Modern UI Elements**: Rounded corners, shadows, and hover effects
- **Portland-Themed**: Forest emojis and local activity references

## 🔧 Customization

Want to add your own activities or modify the options? Here's how:

### Adding New Options
1. Open `index.html`
2. Find the spinner section you want to modify
3. Add new `<div class="spinner-option">Your Option</div>` elements
4. Update the CSS if you add more than 8 options per spinner

### Changing Colors
1. Open `style.css`
2. Find the `.spinner-wheel` background gradient
3. Modify the `conic-gradient` colors to your preference

### Adjusting Animation Speed
1. Open `style.css`
2. Find the `.spinner-wheel` transition property
3. Change the `2s` duration to your preferred timing

## 🌟 Portland Love

This project celebrates the amazing city of Portland with activity categories inspired by what makes the city special:

- **Forest Park**: One of the largest urban forests in the US
- **Food Cart Culture**: Portland's famous food cart scene
- **Craft Beer**: Home to hundreds of breweries
- **Outdoor Adventures**: From mountains to rivers to gardens
- **Arts & Culture**: Museums, galleries, and live music venues

The app helps break through decision fatigue by providing random category suggestions, making it easier to choose what type of activity you want to pursue rather than getting stuck on specific locations.

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

This is a demo project, but feel free to:
- Fork the repository
- Submit issues or suggestions
- Create pull requests for improvements
- Use it as inspiration for your own projects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created by [Matt Gregg](https://github.com/itwasmattgregg) as a fun demo project that helps solve the "what should I do today?" problem with random activity suggestions.

---

**Made with ❤️ in Portland, Oregon**