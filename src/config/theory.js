export const gravitationTheory = {
    description: "Gravitation is the force by which two bodies attract each other. This experiment illustrates gravitational pull and air resistance (drag) effects on a falling object, allowing us to examine how these forces influence the object’s velocity and position over time.",
    laws: [
      {
        lawName: "Newton's Law of Universal Gravitation",
        description: "Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.",
        formula: "F = G * (m1 * m2) / r^2"
      },
      {
        lawName: "Gravitational Acceleration",
        description: "Near the surface of the Earth, all objects fall with the same constant acceleration, regardless of their mass.",
        formula: "g = 9.8 m/s^2"
      }
    ],
    properties: [
      "Always Attractive: The gravitational force is always pulling objects toward Earth.",
"Inversely Proportional to Distance: The gravitational force decreases with distance but remains effective within the small simulation distance.",
"Influenced by Mass and Gravity: While mass remains constant, gravitational acceleration can be adjusted to observe changes in force.",
    ],
    uses: [
      "Astronomy: Explains orbits and gravitational effects on celestial bodies.",
      "Earth Sciences: Analyzes tides, Earth's shape, and geophysical surveys.",
      "Technology: Powers satellite, GPS, and space exploration.",
      "Daily Life: Explains falling objects and experienced weight.",
    ],
    applications: [
      "Space Exploration: Calculating satellite orbits and gravity assists.",
      "Tidal Studies: Tidal predictions and coastal management.",
      "Planetary Motion: Understanding orbits and researching dark matter.",
      "Engineering: Gravity-based surveying and structural stability.",
      "Future Research: Insights into quantum gravity and black hole studies.",
    ],
    futureResearch: "Expanding knowledge of gravitation could lead to insights into quantum gravity, unifying general relativity and quantum mechanics."
  };
  
  export const chemistryTheory = {
    phenolFormaldehydeResin: {
      description: "Phenol formaldehyde resins (PFs) are condensation polymers obtained by condensing phenol with formaldehyde in the presence of an acidic or alkaline catalyst. They were first prepared by Backeland, an American Chemist who named them Bakelite. These are thermosetting polymers.",
      thermosets: "Polymers that change irreversibly into hard, rigid, and infusible materials upon heating are called thermosetting polymers. They are usually prepared by heating relatively low molecular mass, semi-fluid polymers, which become infusible and form an insoluble hard mass on heating due to cross-linking between polymer chains. Examples include Urea-Formaldehyde and Melamine-Formaldehyde resins.",
      properties: [
        "Low degree of polymerization: soft",
        "Excellent adhesive properties, used as bonding glue for laminated wooden planks and in varnishes and lacquers",
        "High degree of polymerization: hard, rigid, scratch-resistant, and infusible",
        "Resistant to non-oxidizing acids, salts, and many organic solvents",
        "Withstands high temperatures",
        "Excellent electrical insulators"
      ],
      uses: [
        "Moulded articles such as radio/TV parts, combs, fountain pens, barrels, phonograph records",
        "Decorative laminates, wall coverings",
        "Electrical goods such as switches, plugs",
        "Impregnating fabrics, wood, and paper",
        "Bonding glue for laminated wooden planks and in varnishes and lacquers",
        "Sulphonated phenol-formaldehyde resins as ion-exchange resins"
      ],
      preparation: "Phenol and formaldehyde react in the presence of an acidic or basic catalyst, forming methylene bridges in ortho, para, or both positions. Initially, a linear polymer called Novolac forms, which then cross-links into a hard polymer called phenol-formaldehyde resin or Bakelite."
    },
    ureaFormaldehydeResin: {
      description: "Urea-formaldehyde is a non-transparent thermosetting resin made from urea and formaldehyde when heated in the presence of a mild base such as ammonia or pyridine. It is commonly used in adhesives, finishes, and molded objects. Urea-formaldehyde resin was first produced in 1884 by Hölzer and Bernhard Tollens.",
      productionSteps: {
        stageOne: "Urea is hydroxymethylolated by the addition of formaldehyde to the amino groups, leading to the formation of mono-, di-, and trimethylolureas.",
        stageTwo: "Condensation of methylolureas occurs under acidic conditions, forming methylene bridges between amino groups and creating low molecular weight polymers. The reactions lead to methylene ether linkages, splitting out formaldehyde and water."
      },
      uses: [
        "Adhesives for plywood, particleboard, and other wood products",
        "Molded objects"
      ],
      properties: [
        "Used mainly as adhesives",
        "Thermosetting plastic",
        "Formed from the combination of urea and formaldehyde"
      ]
    }
  };
  
  export const AcidBase ={
 
      
      cationAnalysis: {
        overview: "Systematic qualitative analysis of cations involves dividing them into groups based on their selective precipitation with specific reagents, followed by confirmatory tests.",
        
        generalProcedure: [
          "1. **Preliminary Tests**: Flame test, solubility check, reaction with dilute HCl, H₂SO₄, etc.",
          "2. **Group Separation**: Sequential addition of group reagents to precipitate cations.",
          "3. **Confirmatory Tests**: Identification of individual cations using specific reactions."
        ],
    
        analysisGroups: [
          {
            group: "Group I (Silver Group)",
            reagent: "Dilute HCl",
            cations: [
              {
                name: "Ag⁺ (Silver)",
                precipitate: "White AgCl (soluble in NH₄OH)",
                confirmatoryTest: "Dissolves in NH₄OH → reprecipitates with HNO₃"
              },
              {
                name: "Pb²⁺ (Lead)",
                precipitate: "White PbCl₂ (soluble in hot water)",
                confirmatoryTest: "Yellow PbCrO₄ with K₂CrO₄"
              },
              {
                name: "Hg₂²⁺ (Mercury I)",
                precipitate: "White Hg₂Cl₂ (turns black with NH₄OH)",
                confirmatoryTest: "Black mixture of Hg + HgNH₂Cl with NH₄OH"
              }
            ]
          },
          {
            group: "Group II (Copper-Arsenic Group)",
            subGroups: {
              IIA: "Cu²⁺, Pb²⁺, Bi³⁺, Cd²⁺ (Acid-insoluble sulfides)",
              IIB: "As³⁺, Sb³⁺, Sn²⁺ (Thio-complex forming)"
            },
            reagent: "H₂S gas in 0.3M HCl",
            cations: [
              {
                name: "Cu²⁺ (Copper)",
                precipitate: "Black CuS",
                confirmatoryTest: "Blue [Cu(NH₃)₄]²⁺ in NH₄OH"
              },
              {
                name: "As³⁺ (Arsenic)",
                precipitate: "Yellow As₂S₃",
                confirmatoryTest: "Gives garlic odor when heated + yellow precipitate with (NH₄)₂MoO₄"
              }
            ]
          },
          {
            group: "Group III (Iron Group)",
            reagent: "NH₄Cl + NH₄OH (pH ~8-9)",
            cations: [
              {
                name: "Fe³⁺ (Iron III)",
                precipitate: "Red-brown Fe(OH)₃",
                confirmatoryTest: "Blood red color with KSCN or blue Prussian blue with K₄[Fe(CN)₆]"
              },
              {
                name: "Al³⁺ (Aluminum)",
                precipitate: "White gelatinous Al(OH)₃",
                confirmatoryTest: "Red lake with alizarin dye"
              }
            ]
          },
          // ... (similarly for Groups IV-VI)
        ],
    
        specialTests: {
          flameTests: [
            "Na⁺: Persistent yellow flame",
            "K⁺: Violet flame (view through cobalt glass)",
            "Ca²⁺: Brick red flame"
          ],
          dryTests: [
            "Ammonium (NH₄⁺): Pungent smell with NaOH on heating",
            "Carbonate (CO₃²⁻): Effervescence with dilute acid"
          ]
        },
    
        notes: [
          "• Always perform group separation in sequence (I → VI)",
          "• Wash precipitates with hot water to remove adsorbed ions",
          "• Use fresh reagents for sulfides (H₂S decays rapidly)"
        ]
      }
    }
  