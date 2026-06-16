const voices = {
  barons: {
    label: "Voice of resistance",
    title: "Rebel barons demanded limits on the Crown.",
    body:
      "After King John lost territory in France and raised heavy feudal payments, many barons pushed back. Magna Carta protected elite property rights, limited certain payments to the Crown, and created a council of twenty-five barons to pressure the king to obey the agreement.",
    insight:
      "The loudest medieval political voices often belonged to people who already had land, rank, and military power.",
  },
  king: {
    label: "Voice of monarchy",
    title: "King John accepted the charter under pressure.",
    body:
      "John did not grant Magna Carta because he suddenly believed in shared government. He faced rebellion, military weakness, and a crisis of legitimacy. His voice in the document is defensive: a ruler trying to preserve power by making promises.",
    insight:
      "Magna Carta shows that royal authority could be forced into negotiation when political pressure became strong enough.",
  },
  church: {
    label: "Voice of mediation",
    title: "Church leaders helped turn demands into a charter.",
    body:
      "Archbishop Stephen Langton played a major role in shaping the settlement. The charter opens by protecting the freedom of the English Church, showing that religious authority was not separate from politics in medieval England.",
    insight:
      "The church gave the conflict a language of law, oath, and moral obligation.",
  },
  towns: {
    label: "Voice of commerce",
    title: "Towns and merchants sought stable rules.",
    body:
      "Magna Carta included protections for London and other towns, plus concern for weights, measures, and trade. These clauses mattered because disorder and arbitrary fees could damage commerce.",
    insight:
      "Economic voices were present, but usually through corporate privileges rather than modern individual rights.",
  },
  silenced: {
    label: "Voice of absence",
    title: "Many people affected by power were not represented.",
    body:
      "Most peasants, women, laborers, and poor townspeople did not negotiate the charter. Some clauses touched their lives indirectly, but Magna Carta primarily spoke for elites and free people within a feudal society.",
    insight:
      "The silences are part of the story: whose rights become law depends on who has the power to be heard.",
  },
};

const timeline = {
  1204: {
    title: "A king under pressure",
    body:
      "John lost Normandy to the French king, which hurt his reputation and made future military campaigns expensive. The demand for money became one of the roots of baronial resistance.",
  },
  1214: {
    title: "Military defeat raises the stakes",
    body:
      "A failed campaign in France made the king look weaker and left many barons angry about the taxes and payments used to fund war.",
  },
  1215: {
    title: "Runnymede makes protest official",
    body:
      "The meeting at Runnymede produced a written peace agreement. It was fragile, but it gave political demands a permanent form.",
  },
  1216: {
    title: "Reissue keeps the charter alive",
    body:
      "After John's death, the government of Henry III reissued Magna Carta. That decision helped transform a failed peace deal into a surviving legal tradition.",
  },
  1297: {
    title: "A later version enters statute law",
    body:
      "Edward I confirmed Magna Carta in 1297. Later generations remembered this version as part of a longer argument that rulers must answer to law.",
  },
};

const voiceTabs = document.querySelectorAll(".voice-tab");
const voiceLabel = document.querySelector("#voice-label");
const voiceTitle = document.querySelector("#voice-title");
const voiceBody = document.querySelector("#voice-body");
const voiceInsight = document.querySelector("#voice-insight");

voiceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = voices[tab.dataset.voice];

    voiceTabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    voiceLabel.textContent = selected.label;
    voiceTitle.textContent = selected.title;
    voiceBody.textContent = selected.body;
    voiceInsight.textContent = selected.insight;
  });
});

const timelineItems = document.querySelectorAll(".timeline-item");
const detailYear = document.querySelector("#detail-year");
const detailTitle = document.querySelector("#detail-title");
const detailBody = document.querySelector("#detail-body");

timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    const year = item.dataset.year;
    const selected = timeline[year];

    timelineItems.forEach((entry) => entry.classList.remove("active"));
    item.classList.add("active");

    detailYear.textContent = item.querySelector("span").textContent;
    detailTitle.textContent = selected.title;
    detailBody.textContent = selected.body;
  });
});
