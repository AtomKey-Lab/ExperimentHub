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
  
  // theory.js
  export const AcidBase = {
    overview: `The pH test is used to determine whether a substance is acidic, basic, or neutral. This is done by using indicators that change color depending on the pH of the solution.`,
  
    generalProcedure: [
      "Take a small amount of the solution in a test tube.",
      "Add a few drops of an indicator (like litmus, phenolphthalein, or methyl orange).",
      "Observe the color change.",
      "Compare the color with the standard pH scale to determine the nature of the solution."
    ],
  
    analysisGroups: [
      {
        group: "Litmus Paper Test",
        reagent: "Blue or Red Litmus Paper",
        cations: [
          {
            name: "Acidic Solution",
            precipitate: "Turns blue litmus red",
            confirmatoryTest: "Confirms presence of H⁺ ions"
          },
          {
            name: "Basic Solution",
            precipitate: "Turns red litmus blue",
            confirmatoryTest: "Confirms presence of OH⁻ ions"
          }
        ]
      },
      {
        group: "Phenolphthalein Test",
        reagent: "Phenolphthalein",
        cations: [
          {
            name: "Acidic/Neutral Solution",
            precipitate: "Remains colorless",
            confirmatoryTest: "No OH⁻ ions present"
          },
          {
            name: "Basic Solution",
            precipitate: "Turns pink",
            confirmatoryTest: "Confirms presence of OH⁻ ions"
          }
        ]
      },
      {
        group: "Methyl Orange Test",
        reagent: "Methyl Orange",
        cations: [
          {
            name: "Acidic Solution",
            precipitate: "Turns red",
            confirmatoryTest: "Confirms acidic nature"
          },
          {
            name: "Basic Solution",
            precipitate: "Turns yellow",
            confirmatoryTest: "Confirms basic nature"
          }
        ]
      }
    ]
  };
  