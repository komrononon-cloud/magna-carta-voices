const voices = {
  barons: {
    label: "Voice of the barons",
    title: "Rebel barons demanded limits on the Crown and restricted governance.",
    body:
      "After King John lost vital territories in France, losing nearly all the Plantagenent lands in Northern France, he raised heavy feudal payments like scutage and military service. Many barons pushed back. Magna Carta protected elite property rights, limited certain payments to the Crown, and created a council of twenty-five barons to pressure the king to obey the agreement. This coalition was known as the 25 'Surety' Barons.",
    insight:
      "The loudest voices often belonged to people who already had land, rank, and military power. These were the barons and nobles.",
  },
  king:
    label: "Voice of monarchy",
    title: "King John accepted the charter under pressure from the barons and the Church.",
    body:
      "John did not want to grant Magna Carta to maintain his power. He faced rebellion, military weakness, and a crisis of legitimacy. His voice in the document is defensive, as he is a ruler trying to preserve power by making promises.",
    insight:
      "John's signing of the Magna Carta shows that royal authority could be forced into negotiation when political pressure and rebellion became strong enough.",
  }
  church: {
    label: "Voice of mediation",
    title: "The Church - the Pope and Archbishop - helped turn demands and grief into a systematic Charter.",
    body:
      "Archbishop Stephen Langton played a major role in shaping the settlement. The charter opens by protecting the freedom of the English Church, showing that religious authority was not separate from politics in medieval England.",
    insight:
      "The church's influence on the Magna Carta's signing gave the Magna Carta reason, morality and religious obligation.",
  },
  towns: {
    label: "Voice of the towns",
    title: "Towns and merchants wanted more stable and fair rules.",
    body:
      "Magna Carta included protections for London and other towns, plus concern for weights, measures, and trade. These clauses mattered because disorder and arbitrary fees damaged trade and commerce.",
    insight:
      "Voices which contributed to the economy were prevalent, but usually through corporate privileges rather than rights that protected individuals.",
  },
  silenced: {
    label: "Voice of absence",
    title: "Many people affected by the corrupted power were not represented.",
    body:
      "Most peasants, women, laborers, and poor townspeople were not part of the negotiatiation the charter. Some clauses improved their lives by a little, indirectly, but Magna Carta primarily spoke for elites and free people within a feudal society.",
    insight:
      "Although the Magna Carta protected the rights of people, it impacted a limited amount of people, particularly the common people who were also impacted by the corruption of King John.",
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
