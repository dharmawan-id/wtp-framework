/*
  WTP Framework: data model for the interactive diagnostic.
  Pure data, no dependencies. Consumed by app.js.
  Every user-facing string carries both English (en) and Indonesian (id).
  Source of truth for the prose is /framework/wtp-framework.en.md and .id.md.
*/

const WTP = {
  meta: {
    title: { en: "WTP Diagnostic", id: "Diagnostik WTP" },
    tagline: {
      en: "Run the decision tree. Find the primary driver, the positioning, the first tactics, and the brakes to check.",
      id: "Jalankan pohon keputusan. Temukan pendorong utama, posisinya, taktik pertama, dan rem yang perlu dicek."
    }
  },

  // STEP 1: the five clusters (fast triage)
  clusters: [
    {
      id: "relieve",
      label: { en: "Relieve", id: "Lepas dari Beban" },
      blurb: { en: "Escape something bad, risky, or effortful", id: "Lepas dari yang buruk, berisiko, atau melelahkan" },
      drivers: ["solve", "fear", "convenience"]
    },
    {
      id: "enjoy",
      label: { en: "Enjoy", id: "Menikmati" },
      blurb: { en: "Reach a pleasurable state", id: "Mencapai kondisi yang menyenangkan" },
      drivers: ["entertain"]
    },
    {
      id: "become",
      label: { en: "Become", id: "Membangun Diri" },
      blurb: { en: "Construct or elevate the self", id: "Menyusun atau mengangkat diri" },
      drivers: ["status", "growth", "identity"]
    },
    {
      id: "belong",
      label: { en: "Belong", id: "Rasa Memiliki" },
      blurb: { en: "Manage bonds, standing, and conscience with others", id: "Mengelola ikatan, kedudukan, dan nurani dengan orang lain" },
      drivers: ["belonging", "obligation", "empathy", "values"]
    },
    {
      id: "keepup",
      label: { en: "Keep up", id: "Takut Ketinggalan" },
      blurb: { en: "Answer pressure from time and continuity", id: "Menjawab tekanan waktu dan kesinambungan" },
      drivers: ["fomo", "habit"]
    }
  ],

  // STEP 2 + result: the thirteen drivers
  drivers: {
    solve: {
      name: { en: "Solve", id: "Atasi Masalah (Solve)" },
      ask: { en: "A concrete, named problem they want fixed", id: "Masalah konkret bernama yang ingin dibereskan" },
      stateA: { en: "Pain, friction, broken", id: "Sakit, macet, rusak" },
      stateB: { en: "Relief, functional, fixed", id: "Lega, jalan, beres" },
      vp: { en: "Remedy", id: "Remedy (obat)" },
      promise: { en: "We remove problem X.", id: "Kami hilangkan masalah X." },
      tactics: { en: ["Outcome visualization", "Risk reversal"], id: ["Visualisasi hasil", "Jaminan pengembalian"] },
      message: { en: "Name the exact problem, then show it gone.", id: "Sebut persis masalahnya, lalu tunjukkan ia lenyap." }
    },
    fear: {
      name: { en: "Fear", id: "Rasa Takut (Fear)" },
      ask: { en: "A threat or risk they want protection from", id: "Ancaman atau risiko yang ingin dihindari" },
      stateA: { en: "Anxious, exposed, vulnerable", id: "Cemas, rawan, tidak terlindung" },
      stateB: { en: "Secure, protected, safe", id: "Aman, terlindungi, tenang" },
      vp: { en: "Shield", id: "Shield (perisai)" },
      promise: { en: "This protects you from threat X.", id: "Ini melindungimu dari ancaman X." },
      tactics: { en: ["Authority transfer", "Social proof"], id: ["Transfer otoritas", "Bukti sosial"] },
      message: { en: "Make the threat vivid, then make the protection credible.", id: "Bikin ancamannya terasa nyata, lalu bikin perlindungannya tepercaya." }
    },
    convenience: {
      name: { en: "Convenience", id: "Kemudahan (Convenience)" },
      ask: { en: "Effort, time, or complexity they want gone", id: "Usaha, waktu, atau kerumitan yang ingin hilang" },
      stateA: { en: "Effortful, slow, complex", id: "Ribet, lambat, berbelit" },
      stateB: { en: "Easy, instant, frictionless", id: "Gampang, cepat, mulus" },
      vp: { en: "Shortcut", id: "Shortcut (jalan pintas)" },
      promise: { en: "We handle the unpleasant part.", id: "Bagian yang merepotkan, kami yang urus." },
      tactics: { en: ["Effort contrast", "Default architecture"], id: ["Kontras usaha", "Arsitektur default"] },
      message: { en: "Contrast the hard old way with the effortless new one.", id: "Kontraskan cara lama yang sulit dengan cara baru yang ringan." }
    },
    entertain: {
      name: { en: "Entertain", id: "Hiburan (Entertain)" },
      ask: { en: "Pleasure, stimulation, or escape", id: "Kesenangan, rangsangan, atau pelarian" },
      stateA: { en: "Bored, understimulated", id: "Bosan, hambar" },
      stateB: { en: "Stimulated, pleased, engaged", id: "Terhibur, senang, asyik" },
      vp: { en: "Experience", id: "Experience (pengalaman)" },
      promise: { en: "We make you feel Y.", id: "Kami bikin kamu merasakan Y." },
      tactics: { en: ["Sensory optimization", "Curiosity gap"], id: ["Optimasi indrawi", "Umpan rasa penasaran"] },
      message: { en: "Lead with the feeling, let the product fade behind it.", id: "Pimpin dengan perasaannya, biarkan produknya mundur di baliknya." }
    },
    status: {
      name: { en: "Status", id: "Status" },
      ask: { en: "Position and recognition relative to others", id: "Posisi dan pengakuan dibanding orang lain" },
      stateA: { en: "Invisible, low rank", id: "Tidak kelihatan, dipandang rendah" },
      stateB: { en: "Recognized, elevated, admired", id: "Diakui, naik kelas, dikagumi" },
      vp: { en: "Signal", id: "Signal (sinyal)" },
      promise: { en: "This shows your position to the world.", id: "Ini menunjukkan posisimu ke dunia." },
      tactics: { en: ["Exclusivity design", "Social comparison"], id: ["Desain eksklusif", "Pembandingan sosial"] },
      message: { en: "Make the signal legible to the people whose opinion they want.", id: "Bikin sinyalnya terbaca oleh orang yang pendapatnya mereka mau." }
    },
    growth: {
      name: { en: "Growth", id: "Bertumbuh (Growth)" },
      ask: { en: "Becoming more capable or developed", id: "Jadi lebih cakap atau berkembang" },
      stateA: { en: "Stagnant, unfulfilled", id: "Mentok, jalan di tempat" },
      stateB: { en: "Growing, developing, becoming", id: "Berkembang, naik level, jadi lebih" },
      vp: { en: "Catalyst", id: "Catalyst (katalis)" },
      promise: { en: "This makes you a better version of yourself.", id: "Ini bikin kamu jadi versi yang lebih baik." },
      tactics: { en: ["Hope and anticipation", "Outcome visualization"], id: ["Harapan", "Visualisasi hasil"] },
      message: { en: "Show the future self, and make the path feel achievable.", id: "Tunjukkan diri masa depannya, dan bikin jalannya terasa terjangkau." }
    },
    identity: {
      name: { en: "Identity", id: "Identitas (Identity)" },
      ask: { en: "Expressing who they actually are", id: "Menyatakan siapa dirinya sebenarnya" },
      stateA: { en: "Undefined, incoherent self", id: "Diri yang kabur, tidak nyambung" },
      stateB: { en: "Expressed, visible, coherent self", id: "Diri yang utuh, kelihatan, jelas" },
      vp: { en: "Canvas", id: "Canvas (kanvas)" },
      promise: { en: "This expresses who you actually are.", id: "Ini menyatakan siapa kamu sebenarnya." },
      tactics: { en: ["Identity narrative", "IKEA effect"], id: ["Narasi identitas", "Efek IKEA"] },
      message: { en: "Reflect the identity back, let them co-create it.", id: "Pantulkan identitasnya, biarkan mereka ikut menciptakannya." }
    },
    belonging: {
      name: { en: "Belonging", id: "Rasa Memiliki (Belonging)" },
      ask: { en: "Joining or staying in a group", id: "Bergabung atau bertahan di sebuah kelompok" },
      stateA: { en: "Excluded, isolated", id: "Terasing, di luar lingkaran" },
      stateB: { en: "Included, connected, accepted", id: "Diterima, nyambung, jadi bagian" },
      vp: { en: "Tribe", id: "Tribe (komunitas)" },
      promise: { en: "You become part of this group.", id: "Kamu jadi bagian dari kelompok ini." },
      tactics: { en: ["Community building", "Social proof"], id: ["Membangun komunitas", "Bukti sosial"] },
      message: { en: "Show the group, and make the door open.", id: "Tunjukkan kelompoknya, dan buka pintunya." }
    },
    obligation: {
      name: { en: "Obligation", id: "Kewajiban (Obligation)" },
      ask: { en: "Repaying a social debt", id: "Membalas utang budi" },
      stateA: { en: "Indebted, socially owing", id: "Berutang budi, tidak enak" },
      stateB: { en: "Square, free, reciprocated", id: "Lunas, impas, sudah balas budi" },
      vp: { en: "Protocol", id: "Protocol (protokol)" },
      promise: { en: "This fulfills your social obligation.", id: "Ini menunaikan kewajiban sosialmu." },
      tactics: { en: ["Reciprocity", "Relationship framing"], id: ["Timbal balik", "Bingkai hubungan"] },
      message: { en: "Give first, then make reciprocation easy and visible.", id: "Beri dulu, lalu bikin balasannya gampang dan kelihatan." }
    },
    empathy: {
      name: { en: "Empathy", id: "Empati (Empathy)" },
      ask: { en: "Relieving guilt over others' suffering", id: "Meredakan tidak enak hati melihat orang susah" },
      stateA: { en: "Guilt, moral discomfort", id: "Tidak enak hati, terganggu nuraninya" },
      stateB: { en: "Moral relief, pride", id: "Lega, ikut merasa berbuat baik" },
      vp: { en: "Cause", id: "Cause (kepedulian)" },
      promise: { en: "By paying, you help Z.", id: "Dengan membayar, kamu menolong Z." },
      tactics: { en: ["Outcome visualization", "Proximity of need"], id: ["Visualisasi hasil", "Kedekatan yang ditolong"] },
      message: { en: "Make the help concrete and the recipient close.", id: "Bikin pertolongannya konkret dan yang ditolong terasa dekat." }
    },
    values: {
      name: { en: "Values", id: "Nilai (Values)" },
      ask: { en: "Acting on a moral or ethical value", id: "Bertindak atas nilai moral atau etika" },
      stateA: { en: "Inauthentic, misaligned", id: "Merasa munafik, tidak sejalan" },
      stateB: { en: "Aligned, morally expressed", id: "Sejalan dengan prinsip, lega secara moral" },
      vp: { en: "Alignment", id: "Alignment (keselarasan)" },
      promise: { en: "This is consistent with what you believe.", id: "Ini sejalan dengan yang kamu yakini." },
      tactics: { en: ["Authority transfer", "Values framing"], id: ["Transfer otoritas", "Bingkai nilai"] },
      message: { en: "Prove the value is real, not painted on.", id: "Buktikan nilainya sungguhan, bukan tempelan." }
    },
    fomo: {
      name: { en: "FOMO", id: "FOMO" },
      ask: { en: "Fear of missing out", id: "Takut ketinggalan" },
      stateA: { en: "Left behind, missing out", id: "Ketinggalan, kelewatan" },
      stateB: { en: "In the loop, secured", id: "Ikut serta, tidak terlewat" },
      vp: { en: "Access", id: "Access (akses)" },
      promise: { en: "This is limited, and you have it.", id: "Ini terbatas, dan kamu kebagian." },
      tactics: { en: ["Exclusivity and scarcity", "Anchoring"], id: ["Eksklusif dan kelangkaan", "Penjangkaran"] },
      message: { en: "Make the window real and the missing-out concrete.", id: "Bikin jendelanya nyata dan rasa ketinggalannya konkret." }
    },
    habit: {
      name: { en: "Habit", id: "Kebiasaan (Habit)" },
      ask: { en: "Continuing an established routine", id: "Melanjutkan rutinitas yang sudah mapan" },
      stateA: { en: "Withdrawal, disrupted routine", id: "Terganggu rutinitasnya" },
      stateB: { en: "Familiar comfort, continuity", id: "Nyaman seperti biasa, lanjut" },
      vp: { en: "Subscription", id: "Subscription (langganan)" },
      promise: { en: "This is always there without you thinking about it.", id: "Ini selalu ada tanpa perlu kamu pikirkan." },
      tactics: { en: ["Default architecture", "Switching-cost design"], id: ["Arsitektur default", "Membangun ongkos pindah"] },
      message: { en: "Win the routine early; change context, not emotion.", id: "Menangkan rutinitasnya sejak awal; ubah konteks, bukan emosi." }
    }
  },

  // Optional refine: journey stage tilts which amplifiers to deploy
  stages: [
    { id: "awareness", label: { en: "Awareness", id: "Sadar" }, amps: { en: "Curiosity, envy, mild shame", id: "Penasaran, iri, sedikit malu" } },
    { id: "consideration", label: { en: "Consideration", id: "Menimbang" }, amps: { en: "Hope, pride, nostalgia", id: "Harapan, harga diri, nostalgia" } },
    { id: "decision", label: { en: "Purchase decision", id: "Memutuskan beli" }, amps: { en: "Anchoring, accumulation, anticipated regret", id: "Penjangkaran, dorongan menumpuk, takut menyesal" } },
    { id: "onboarding", label: { en: "Onboarding", id: "Onboarding" }, amps: { en: "Hope, curiosity", id: "Harapan, penasaran" } },
    { id: "retention", label: { en: "Retention", id: "Bertahan" }, amps: { en: "Love, guilt, anticipated regret", id: "Cinta, rasa bersalah, takut menyesal" } },
    { id: "advocacy", label: { en: "Advocacy", id: "Advokasi" }, amps: { en: "Pride, love", id: "Harga diri, cinta" } }
  ],

  // Result: the demand-side brakes to check
  inhibitors: {
    functional: {
      label: { en: "Functional", id: "Fungsional" },
      items: {
        en: ["Usage barrier (forces a behavior change)", "Value barrier (gain over current is too small)", "Risk barrier (perceived risk of adopting)"],
        id: ["Hambatan kebiasaan pakai (memaksa ubah perilaku)", "Hambatan nilai (untungnya dibanding sekarang terlalu kecil)", "Hambatan risiko (terasa berisiko untuk diadopsi)"]
      }
    },
    psychological: {
      label: { en: "Psychological", id: "Psikologis" },
      items: {
        en: ["Tradition barrier (clashes with norms)", "Image barrier (unfavorable association)", "Trust deficit (does not believe you deliver)", "Decision inertia and status-quo bias", "Choice overload"],
        id: ["Hambatan tradisi (berbenturan dengan norma)", "Hambatan citra (asosiasi kurang sedap)", "Defisit kepercayaan (belum yakin kamu bisa mengantar)", "Enggan memutuskan dan bias status quo", "Kebanyakan pilihan"]
      }
    },
    economic: {
      label: { en: "Economic", id: "Ekonomi" },
      items: {
        en: ["Liquidity or budget constraint", "Incumbent switching cost", "Perceived price unfairness", "Timing and low urgency"],
        id: ["Keterbatasan dana atau anggaran", "Ongkos pindah dari yang lama", "Harga terasa tidak adil", "Belum mendesak"]
      }
    }
  },

  // Result: magnitude reminders
  magnitude: {
    en: ["Anchor on the buyer's reference price, not your cost.", "Respect the income and budget ceiling.", "Fewer perceived alternatives widen the acceptable range.", "Where quality is hard to judge, price signals quality.", "A price that breaks a fairness norm is resisted even when affordable.", "Reduce the risk discount with guarantees and proof."],
    id: ["Jangkar ke harga acuan pembeli, bukan ke biayamu.", "Hormati langit-langit pendapatan dan anggaran.", "Makin sedikit alternatif yang terlihat, makin lebar rentang yang bisa diterima.", "Saat kualitas susah dinilai, harga jadi sinyal kualitas.", "Harga yang melanggar rasa adil ditolak meski sebenarnya mampu dibayar.", "Tipiskan potongan karena risiko lewat jaminan dan bukti."]
  },

  // Result: B2B overlay (shown when organizational mode is on)
  b2b: {
    en: "Organizational buy: map the buying center (user, influencer, decider, procurement, gatekeeper, champion) and write one message per role. The decider's leading driver is usually Fear, expressed as career risk and defensibility. The strongest brakes are trust deficit, switching cost, and the status-quo default.",
    id: "Pembelian organisasi: petakan pusat pembeliannya (pengguna, pemberi pengaruh, pemutus, pengadaan, penjaga gerbang, juru bawa) dan tulis satu pesan per peran. Pendorong utama si pemutus biasanya Rasa Takut, muncul sebagai risiko karier dan akuntabilitas. Rem terkuatnya: defisit kepercayaan, ongkos pindah, dan pilihan diam status quo."
  },

  // Result: the ethical gate, always shown
  ethic: {
    test: {
      en: "Consumer Autonomy Test: would this person still buy if they fully understood how they were being influenced? If probably not, the combination has crossed from persuasion into manipulation. Do not ship it.",
      id: "Uji Otonomi Konsumen: apakah orang ini tetap akan membeli kalau ia paham betul bagaimana dirinya sedang dipengaruhi? Kalau kemungkinan tidak, kombinasi itu sudah menyeberang dari persuasi ke manipulasi. Jangan dirilis."
    }
  }
};
