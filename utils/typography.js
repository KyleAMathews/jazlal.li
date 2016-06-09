import Typography from 'typography';

const options = {
  "baseFontSize": "18px",
  "baseLineHeight": "28px",
  "modularScales": [
    {
      scale: "double octave",
    },
    {
      scale: "major tenth",
      maxWidth: '500px',
    },
  ],
  "googleFonts": [
    {
      "name": "Oswald",
      "styles": [
        "100",
        "400",
        "700",
      ]
    },
    {
      "name": "PT Sans",
      "styles": [
        "100",
        "400",
        "700",
      ]
    },
  ],
  "headerFontFamily": "Oswald",
  "headerFont": "Oswald",
  "googleHeaderFont": "Oswald",
  "bodyFontFamily": "PT Sans",
  "bodyFont": "PT Sans",
  "googleBodyFont": "PT Sans",
  "headerGray": 0,
  "headerGrayHue": 0,
  "bodyGray": 0,
  "bodyGrayHue": 0,
  "headerWeight": 700,
  "bodyWeight": 400,
  "boldWeight": 700
}

const typography = Typography(options);

// Hot reload typography in development
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography
