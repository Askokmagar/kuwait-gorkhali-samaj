# Kuwait Gorkhali Samaj - Image Setup Guide

This guide explains how to add your images to the website.

## File Structure

Your images should be placed in the following directory structure:

```
client/public/assets/images/
├── president.jpg                    # President's portrait
├── team/                            # Team member photos
│   ├── 101.jpg                     # Anil Sharma
│   ├── 102.jpg                     # Priya Patel
│   ├── 103.jpg                     # Vikram Singh
│   ├── 104.jpg                     # Meera Gupta
│   ├── 105.jpg                     # Ravi Nair
│   ├── 106.jpg                     # Anjali Desai
│   ├── 107.jpg                     # Deepak Verma
│   ├── 108.jpg                     # Neha Reddy
│   ├── 109.jpg                     # Arjun Rao
│   ├── 110.jpg                     # Sanjana Iyer
│   ├── 111.jpg                     # Rohit Menon
│   ├── 112.jpg                     # Divya Kapoor
│   ├── 113.jpg                     # Ashok Joshi
│   ├── 114.jpg                     # Kavya Bhat
│   ├── 115.jpg                     # Suresh Pillai
│   ├── 116.jpg                     # Sneha Mukherjee
│   ├── 117.jpg                     # Aryan Saxena
│   └── 118.jpg                     # Pooja Sinha
└── moments/                         # Community event photos
    ├── moment-1.jpg
    ├── moment-2.jpg
    └── moment-3.jpg
```

## Team Member IDs

The team member IDs correspond to the following people:

### Administration Department
- **101**: Anil Sharma (Head of Administration)
- **102**: Priya Patel (Administrative Officer)
- **103**: Vikram Singh (Administrative Coordinator)

### Social Welfare Department
- **104**: Meera Gupta (Head of Social Welfare)
- **105**: Ravi Nair (Welfare Officer)
- **106**: Anjali Desai (Community Support Specialist)

### Cultural Affairs Department
- **107**: Deepak Verma (Head of Cultural Affairs)
- **108**: Neha Reddy (Cultural Event Coordinator)
- **109**: Arjun Rao (Heritage Preservation Officer)

### Education & Development Department
- **110**: Sanjana Iyer (Head of Education & Development)
- **111**: Rohit Menon (Education Program Manager)
- **112**: Divya Kapoor (Skill Development Coordinator)

### Finance & Planning Department
- **113**: Ashok Joshi (Head of Finance & Planning)
- **114**: Kavya Bhat (Finance Manager)
- **115**: Suresh Pillai (Budget Planning Officer)

### Public Relations & Communications Department
- **116**: Sneha Mukherjee (Head of Public Relations & Communications)
- **117**: Aryan Saxena (Communications Officer)
- **118**: Pooja Sinha (Media Relations Specialist)

## Image Specifications

- **Format**: JPG or PNG
- **President Image**: Portrait orientation, recommended 400x500px
- **Team Member Images**: Square format, recommended 300x300px
- **Community Moments**: Landscape format, recommended 600x400px
- **Quality**: High quality, well-lit photos for best results

## How to Add Images

1. **President Image**:
   - Save your president's photo as `president.jpg`
   - Place it in: `client/public/assets/images/president.jpg`

2. **Team Member Photos**:
   - Rename each team member's photo to their ID number (e.g., `101.jpg` for Anil Sharma)
   - Place all photos in: `client/public/assets/images/team/`

3. **Community Moment Photos**:
   - Name your photos as `moment-1.jpg`, `moment-2.jpg`, `moment-3.jpg`
   - Place them in: `client/public/assets/images/moments/`

## Image Fallback Behavior

If an image file is missing or fails to load:

- **President**: Displays a solid Maroon (#800000) box with "Rajesh Kumar" text
- **Team Members (Heads)**: Displays a solid Maroon (#800000) box with the member's name
- **Team Members (Supporting)**: Displays a solid Gold (#D4AF37) box with the member's name
- **Community Moments**: Displays a solid Maroon (#800000) box with "Community Moment X" text

This ensures the website remains fully functional and visually appealing even while you're adding images.

## Image Paths in Code

The website uses these image paths:

```
/assets/images/president.jpg                    # President
/assets/images/team/{member_id}.jpg             # Team members (e.g., /assets/images/team/101.jpg)
/assets/images/moments/moment-{number}.jpg      # Community moments (e.g., /assets/images/moments/moment-1.jpg)
```

## Tips for Best Results

1. **Consistency**: Use consistent lighting and backgrounds for team member photos
2. **Cropping**: Crop team member photos to show face and shoulders clearly
3. **File Size**: Optimize images to reduce file size (aim for <200KB per image)
4. **Naming**: Always use lowercase filenames and numbers as specified
5. **Testing**: After adding images, refresh your browser to see the changes

## Troubleshooting

If images don't appear:

1. Check that the filename matches exactly (case-sensitive on some systems)
2. Verify the file is in the correct folder
3. Clear your browser cache and refresh
4. Check that the image file is not corrupted
5. Ensure the image format is JPG or PNG

For more help, refer to the `client/public/assets/images/README.md` file.
