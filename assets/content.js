/*
 * Site content: materials (products) and applications (gallery).
 *
 * HOW TO ADD A PHOTO
 * 1. Copy the photo into assets/materials/ (for products) or assets/applications/ (for gallery).
 *    Landscape JPG or WebP, about 1200 px wide, under 300 KB works best.
 * 2. Add the file path to the matching entry below as "image".
 * 3. Add a new entry for a new material or application. Reload the page and it appears.
 *    Entries without an image show a textured placeholder until a photo is added.
 *
 * Fields (materials):   name, description, image (optional), swatch (placeholder style), need (form value)
 * Fields (applications): label, image (optional), swatch (placeholder style)
 * Placeholder styles: sw-granite, sw-marble, sw-tile, sw-stone
 *
 * Sample images in assets/materials/ are stand-ins from Wikimedia Commons (replace with your own shop photos):
 *   granite.jpg          Granite slab, CC0 (https://commons.wikimedia.org/wiki/File:Granite_slab_up_close.jpg)
 *   tiles.jpg            Speckled ceramic tile, CC0 (https://commons.wikimedia.org/wiki/File:Cream_speckled_ceramic_cemented_clean_tile_pattern_floor_ground_texture.jpg)
 *   natural-stone.jpg    Stone wall texture, CC0 (https://commons.wikimedia.org/wiki/File:Stone_Wall_Texture.jpg)
 */
window.SITE_CONTENT = {
  // Paste the WhatsApp community invite link (https://chat.whatsapp.com/...) to show the join card.
  community: {
    name: "Sri Ram Marbles Community",
    inviteUrl: "https://chat.whatsapp.com/FfF6j8LP90z68pJz6m3Qxx"
  },
  materials: [
    {
      name: "Granite",
      description: "Options for kitchen platforms, flooring, staircases, sills and other applications.",
      image: "assets/materials/granite.jpg",
      swatch: "sw-granite",
      need: "Granite",
      varieties: [
        { name: "Tan Brown", image: "assets/materials/Tan Brown.jpeg" },
        { name: "Black granite range", image: "assets/materials/varietie of blakc.png" },
        { name: "Black granite", image: "assets/materials/black.webp" }
      ]
    },
    {
      name: "Marble",
      description: "Natural marble selections for flooring and selected interior applications.",
      image: "assets/materials/Katni Marble.jpeg",
      swatch: "sw-marble",
      need: "Marble",
      varieties: [
        { name: "Katni marble 1", image: "assets/materials/Katni Marble.jpeg" },
        { name: "Katni marble 2", image: "assets/materials/Katni Marbles-2.png" },
        { name: "Katni marble 3", image: "assets/materials/Katni-marble3.jpg" }
      ]
    },
    {
      name: "Tiles",
      description: "Floor and wall tile options for new construction and renovation.",
      image: "assets/materials/tiles.jpg",
      swatch: "sw-tile",
      need: "Tiles"
    },
    {
      name: "Natural stones",
      description: "Stone options for feature surfaces and selected architectural uses.",
      image: "assets/materials/natural-stone.jpg",
      swatch: "sw-stone",
      need: "Natural stones",
      varieties: [
        { name: "Kota stone", image: "assets/materials/kota stone.jpeg" },
        { name: "Green Kota stone", image: "assets/materials/Green Kota Stone.jpg" },
        { name: "Cuddapah stone", image: "assets/materials/cudappa.jpeg" }
      ]
    }
  ],
  applications: [
    { label: "Kitchen platforms", swatch: "sw-granite" /*, image: "assets/applications/kitchen.jpg" */ },
    { label: "Marble interiors", swatch: "sw-marble" /*, image: "assets/applications/marble-interior.jpg" */ },
    { label: "Floor & wall tiles", swatch: "sw-tile" /*, image: "assets/applications/tiles.jpg" */ },
    { label: "Feature stone walls", swatch: "sw-stone" /*, image: "assets/applications/stone-wall.jpg" */ },
    { label: "Staircases", swatch: "sw-marble" /*, image: "assets/applications/staircase.jpg" */ },
    { label: "Flooring", swatch: "sw-granite" /*, image: "assets/applications/flooring.jpg" */ }
  ]
};
