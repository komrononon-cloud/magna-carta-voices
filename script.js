const voices = {
  barons: {
    label: "Voice of resistance",
    title: "The barons pushed back against a king who asked for too much.",
    body:
      "Magna Carta began with anger. After King John lost territory in France and kept asking for money, many barons decided they had heard enough. They wanted promises in writing, not just royal speeches. The charter protected elite landholding, limited some payments to the Crown, and made the king answer to rules he had agreed to follow.",
    insight:
      "This was not democracy yet, but it was a big moment for the idea that power could be challenged in writing.",
  },
  king: {
    label: "Voice of monarchy",
    title: "King John signed because pressure left him little choice.",
    body:
      "John did not wake up wanting to share power. He was backed into a corner by military failure, rebellion, and a growing crisis of trust. In the charter, his voice sounds defensive: a ruler trying to keep control by bargaining with the people who could force him to listen.",
    insight:
      "Magna Carta shows that even strong rulers can be pushed into compromise when opposition becomes organised.",
  },
  church: {
    label: "Voice of mediation",
    title: "Church leaders helped turn conflict into a written settlement.",
    body:
      "Archbishop Stephen Langton and other church leaders helped shape the agreement. The opening clauses protect the freedom of the English Church, which shows how closely religion and politics were tied together in medieval England. The church helped give the quarrel a moral and legal language.",
    insight:
      "Without the church, the settlement might have stayed a raw power struggle instead of becoming a document with lasting authority.",
  },
  towns: {
    label: "Voice of commerce",
    title: "Towns and merchants wanted fairness, not chaos.",
    body:
      "The charter included protections for London and other towns, along with concern for trade, weights, and measures. That mattered because unfair fees and disorder made everyday business harder. Even though these clauses were limited, they show that economic life was starting to demand clearer rules.",
    insight:
      "Trade needed predictability, and predictability helped build the habits that later supported stronger government.",
  },
  silenced: {
    label: "Voice of absence",
    title: "Many people lived under the charter without being heard by it.",
    body:
      "Most peasants, women, laborers, and poorer townspeople did not sit at the table when Magna Carta was made. That silence matters. The document is famous, but it mostly spoke for the powerful. Its omissions remind us that democracy grows slowly, by widening who gets included.",
    insight:
      "The missing voices are part of the history too, because later democracy was shaped by the struggle to include more people.",
  },
  democracy: {
    label: "Voice of legacy",
    title: "Later generations turned a feudal deal into a democratic symbol.",
    body:
      "Over time, Magna Carta was reread by judges, parliamentarians, reformers, colonists, and campaigners for rights. It did not create modern democracy on its own, but it helped build the idea that law should stand above rulers. That idea grew into stronger parliaments, wider rights, and eventually more people having a say in government.",
    insight:
      "Democracy evolved in steps: limits on kings, stronger representative institutions, and the slow expansion of political voice.",
  },
};

const timeline = {
  1204: {
    title: "A king under pressure",
    body:
      "John lost Normandy to the French king, which damaged his reputation and made later military campaigns expensive. Money became one of the biggest reasons people started pushing back.",
  },
  1214: {
    title: "Military failure raises the tension",
    body:
      "Another failed campaign in France made the king look weaker and left many barons angry about the taxes and payments used to fund war.",
  },
  1215: {
    title: "Runnymede becomes a turning point",
    body:
      "At Runnymede, King John accepted Magna Carta as a peace settlement. It was fragile, but it turned protest into a written agreement.",
  },
  1216: {
    title: "The charter survives the king",
    body:
      "After John's death, the government reissued the charter. That decision helped Magna Carta outlive the immediate crisis and become part of political memory.",
  },
  1297: {
    title: "Law keeps the idea alive",
    body:
      "Edward I confirmed Magna Carta in 1297. Later generations treated that version as proof that rulers could be bound by law, not just by force.",
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
});    body:
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
