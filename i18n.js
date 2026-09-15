/* =============================================================
   i18n — dictionary lives here as a plain object on purpose.
   fetch() of a .json file is blocked under file://, so the page
   must open by double-click with no server.

   Any key missing from a language falls back to English.
   ============================================================= */

var I18N = {

  en: {
    'meta.title': `Why Small Businesses Fail`,
    'meta.description': `What the Bureau of Labor Statistics and the Federal Reserve actually record about small business survival — closure rates by year, cash buffers and cost pressure — rather than the venture-capital failure statistics usually quoted in their place.`,

    'header.langLabel': `Change language`,
    'page.h1': `Why Small Businesses Fail`,

    /* ── 1. Two myths ───────────────────────────────────────── */
    's1.h2':  `Everyone quotes 82% and 90%. Here's what those numbers actually mean.`,
    's1.sub': `We checked both. One doesn't hold up, and the other isn't describing you.`,

    's1.c1.claim':   `"82% of small businesses fail because of cash flow problems."`,
    's1.c1.p1':      `We went looking for the study. SCORE cites it. The SBA cites it. The U.S. Chamber cites it. Every one of them credits a U.S. Bank study by Jessie Hagen, and not one of them links to it. It isn't anywhere in the open.`,
    's1.c1.p2':      `What does survive in the older citations is a narrower claim: of the businesses that had already failed, 82% had trouble managing cash flow. That describes the wreckage. It doesn't explain the crash — and it certainly doesn't mean 82% of businesses are headed for one.`,
    's1.c1.verdict': `Unverifiable. We don't use it on this page.`,

    's1.c2.claim':   `"90% of businesses fail."`,
    's1.c2.p1':      `This one is real. It's just not about you. It comes from venture capital, where "failure" means the investors didn't get their money back — and by that definition, 60 to 75% of VC-backed companies fail.`,
    's1.c2.p2':      `A bakery that pays its owner for thirty years and closes when she retires is a success by any human standard and a failure by that one. Two different words, spelled the same.`,
    's1.c2.verdict': `Real, but about someone else. The government's number for businesses like yours is 19–21%.`,

    's1.src1': `The 82% figure: attributed to Jessie Hagen, U.S. Bank. Primary source not located.`,
    's1.src2': `First-year closures: U.S. Bureau of Labor Statistics, Business Employment Dynamics, Table 7. Businesses opened in 2020 and 2019.`,

    /* ── 2. The real numbers ────────────────────────────────── */
    's2.h2':  `Here's what actually happens, measured by the government, not by venture capitalists.`,
    's2.sub': `The Bureau of Labor Statistics has followed every private-sector business with employees since 1994, one opening year at a time. These are closures — the share that didn't make it.`,

    's2.stat1.value': `19.1%`,
    's2.stat1.label': `closed before their first anniversary`,
    's2.stat2.value': `27.7%`,
    's2.stat2.label': `closed within two years`,
    's2.stat3.value': `48.6%`,
    's2.stat3.label': `closed within five years`,
    's2.stat4.value': `65.3%`,
    's2.stat4.label': `closed within ten years`,

    's2.line': `Roughly one in five in year one. About half by year five. Two in three by year ten. Steep, but nowhere near nine in ten.`,
    's2.src':  `U.S. Bureau of Labor Statistics, Business Employment Dynamics, Table 7, data through March 2025. One-, two- and five-year figures follow businesses that opened in 2020; the ten-year figure follows the 2015 cohort, the most recent one to complete a full decade.`,
    's2.note': `BLS counts establishments with employees. Solo ventures with no payroll aren't in this data, and there's no comparable BLS series for them.`,

    /* ── 3. Twenty-seven days ───────────────────────────────── */
    's3.h2':         `Twenty-seven days of cash, meet a year of rising costs.`,
    's3.big':        `27 days`,
    's3.bigCaption': `That's how long the median small business can cover its outgoings with no money coming in. Not a runway. A buffer.`,

    's3.sub1.value': `13 days or fewer`,
    's3.sub1.label': `the bottom quarter of businesses`,
    's3.sub2.value': `19 days`,
    's3.sub2.label': `the median restaurant or retail shop`,

    's3.scaleCaption': `The bottom quarter, the typical restaurant or retail shop, and the overall median — the same three numbers, on one 30-day scale.`,

    's3.transition': `Now put that buffer against what businesses are actually reporting.`,

    's3.p1.value': `77%`,
    's3.p1.text':  `of small employers named rising costs — for goods, services or wages — as a financial challenge. It's the most common one they report.`,
    's3.p2.value': `More than 4 in 10`,
    's3.p2.text':  `pointed specifically at tariff costs. In retail that rises to 69%; in manufacturing, 62%.`,
    's3.p3.value': `About a third`,
    's3.p3.text':  `needed financing and didn't get it, or needed it and didn't apply.`,
    's3.p4.value': `60%`,
    's3.p4.text':  `of the firms that borrowed from online lenders found it cost more than they expected — a higher share than for any other kind of lender.`,

    's3.closing': `Nothing on that list is a catastrophe. There's no fire, no lawsuit, no competitor with a better product. It's just everything getting more expensive at once, for everyone at once, against a buffer measured in weeks. That's the shape most failures actually take.`,

    's3.src1': `Cash buffer: JPMorgan Chase Institute, "Cash is King: Flows, Balances, and Buffer Days," based on 470 million transactions across 597,000 small businesses. Figures reflect 2015 data — the most recent study of this scale we could find.`,
    's3.src2': `Costs and financing: Federal Reserve Small Business Credit Survey, 2026 Report on Employer Firms. Surveyed September 3 – November 14, 2025; 6,525 responses.`,

    /* ── 4. Where the risk sits ─────────────────────────────── */
    's4.h2':  `Most of the risk is spent in the first four years.`,
    's4.sub': `The closure numbers in this page are cumulative, which makes the risk look constant. It isn't. Here is the same cohort measured differently: of the businesses still open, how many make it through one more year.`,

    's4.y1.k': `Year 1`,  's4.y1.v': `79.6%`, 's4.y1.n': `make it`,
    's4.y2.k': `Year 2`,  's4.y2.v': `86.8%`, 's4.y2.n': `of those still open`,
    's4.y3.k': `Year 3`,  's4.y3.v': `88.9%`,
    's4.y4.k': `Year 4`,  's4.y4.v': `90.2%`,
    's4.y5.k': `Year 5`,  's4.y5.v': `90.5%`,
    's4.y6.k': `Year 6`,  's4.y6.v': `92.5%`,
    's4.y7.k': `Year 7`,  's4.y7.v': `93.9%`,
    's4.y8.k': `Year 8`,  's4.y8.v': `92.4%`,
    's4.y9.k': `Year 9`,  's4.y9.v': `92.7%`,
    's4.y10.k': `Year 10`, 's4.y10.v': `92.8%`,

    's4.line': `The first year takes about one in five. By year four the rate clears 90%, and from there it settles into the low 90s — peaking at 93.9% in year seven, then easing back and holding. The risk never goes away. It stops being the dominant fact about your business.`,

    's4.founder.h3': `One more thing, if you're wondering whether you've missed your window.`,
    's4.founder.p1': `Researchers at MIT and the Census Bureau went through administrative records for every new company in the country and found the founders behind the fastest-growing 1 in 1,000. Their average age was 45.`,
    's4.founder.p2': `A 50-year-old founder is close to twice as likely to build a runaway success as a 30-year-old. The strongest single predictor they found wasn't youth, or nerve, or a degree — it was having already worked in the industry you're starting in.`,
    's4.closing':    `Which means the experience you're worried makes you late is the part that's actually on your side.`,

    's4.src1': `Year-over-year survival: U.S. Bureau of Labor Statistics, Business Employment Dynamics, Table 7, businesses opened in 2015, tracked through March 2025.`,
    's4.src2': `Founder age: Azoulay, Jones, Kim and Miranda, "Age and High-Growth Entrepreneurship," NBER Working Paper 24489, using U.S. Census Bureau administrative data.`,

    /* ── footer ─────────────────────────────────────────────── */
    'footer.src1': `U.S. Bureau of Labor Statistics`,
    'footer.src2': `Federal Reserve Small Business Credit Survey`,
    'footer.src3': `JPMorgan Chase Institute`,
    'footer.src4': `National Bureau of Economic Research`,
    'footer.date': `Figures verified 14 September 2026.`
  },

  ru: {
    'meta.title': `Почему проваливается малый бизнес`,
    'meta.description': `Что на самом деле фиксируют Bureau of Labor Statistics и Federal Reserve о выживаемости малого бизнеса — доля закрытий по годам, запас наличности и давление издержек — вместо статистики провалов венчурных стартапов, которую обычно приводят вместо этого.`,

    'header.langLabel': `Сменить язык`,
    'page.h1': `Почему проваливается малый бизнес`,

    /* ── 1. Два мифа ─────────────────────────────────────────── */
    's1.h2':  `Все цитируют 82% и 90%. Вот что эти цифры значат на самом деле.`,
    's1.sub': `Мы проверили обе. Одна не выдерживает проверки, а другая — не про вас.`,

    's1.c1.claim':   `«82% малого бизнеса разоряются из-за кассовых разрывов».`,
    's1.c1.p1':      `Мы попытались найти это исследование. На него ссылаются SCORE, SBA и Торговая палата США. Все они называют источником исследование банка U.S. Bank, проведённое Джесси Хейген, — и ни один не даёт на него ссылку. В открытом доступе его попросту нет.`,
    's1.c1.p2':      `В более старых цитатах сохранилась более узкая формулировка: среди уже закрывшихся бизнесов у 82% были проблемы с кассовыми разрывами. Это описывает последствия, а не причину краха — и уж точно не значит, что 82% бизнесов ждёт та же участь.`,
    's1.c1.verdict': `Непроверяемо. Мы не используем эту цифру на этой странице.`,

    's1.c2.claim':   `«90% бизнесов проваливаются».`,
    's1.c2.p1':      `Эта цифра настоящая. Просто она не про вас. Она пришла из венчурного мира, где «провал» означает, что инвесторы не вернули вложенные деньги, — и по этому определению проваливаются от 60 до 75% компаний с венчурным финансированием.`,
    's1.c2.p2':      `Пекарня, которая тридцать лет кормила владелицу и закрылась, когда та вышла на пенсию, — успех по любым человеческим меркам и провал по этому определению. Два разных смысла под одним словом.`,
    's1.c2.verdict': `Цифра настоящая, но не про вас. Официальные данные для бизнеса вроде вашего — 19–21%.`,

    's1.src1': `Цифра 82%: приписывается Джесси Хейген, U.S. Bank. Первоисточник не найден.`,
    's1.src2': `Закрытия в первый год: U.S. Bureau of Labor Statistics, Business Employment Dynamics, таблица 7. Бизнесы, открытые в 2020 и 2019 годах.`,

    /* ── 2. Настоящие числа ─────────────────────────────────── */
    's2.h2':  `Вот что происходит на самом деле — по данным государственной статистики, а не венчурных фондов.`,
    's2.sub': `Bureau of Labor Statistics отслеживает каждый частный бизнес с наёмными работниками с 1994 года, по годам открытия. Это доля закрывшихся — тех, кто не выжил.`,

    's2.stat1.value': `19,1%`,
    's2.stat1.label': `закрылись, не дожив до первого дня рождения`,
    's2.stat2.value': `27,7%`,
    's2.stat2.label': `закрылись в течение двух лет`,
    's2.stat3.value': `48,6%`,
    's2.stat3.label': `закрылись в течение пяти лет`,
    's2.stat4.value': `65,3%`,
    's2.stat4.label': `закрылись в течение десяти лет`,

    's2.line': `Примерно каждый пятый — в первый год. Около половины — к пятому. Два из трёх — к десятому. Круто, но совсем не девять из десяти.`,
    's2.src':  `U.S. Bureau of Labor Statistics, Business Employment Dynamics, таблица 7, данные по март 2025 года. Цифры за один, два и пять лет — по бизнесам, открытым в 2020 году; цифра за десять лет — по когорте 2015 года, последней, прошедшей полный десятилетний срок.`,
    's2.note': `BLS считает заведения с наёмными работниками. Бизнесы без сотрудников в эту статистику не входят, и сопоставимого ряда данных для них у BLS нет.`,

    /* ── 3. Двадцать семь дней ──────────────────────────────── */
    's3.h2':         `Двадцать семь дней в запасе — и год растущих издержек.`,
    's3.big':        `27 дней`,
    's3.bigCaption': `Столько медианный малый бизнес может покрывать расходы, если деньги перестанут поступать. Это не взлётная полоса. Это подушка безопасности.`,

    's3.sub1.value': `13 дней и меньше`,
    's3.sub1.label': `нижняя четверть бизнесов`,
    's3.sub2.value': `19 дней`,
    's3.sub2.label': `медиана для ресторанов и розницы`,

    's3.scaleCaption': `Нижняя четверть, типичный ресторан или розничный магазин и общая медиана — одни и те же три числа на одной шкале в 30 дней.`,

    's3.transition': `Теперь сопоставьте эту подушку с тем, что бизнесы сообщают на самом деле.`,

    's3.p1.value': `77%`,
    's3.p1.text':  `малых работодателей назвали рост издержек — на товары, услуги или зарплаты — своей финансовой проблемой. Это самая частая жалоба.`,
    's3.p2.value': `Больше 4 из 10`,
    's3.p2.text':  `указали именно на издержки от тарифов. В рознице это 69%, в производстве — 62%.`,
    's3.p3.value': `Около трети`,
    's3.p3.text':  `нуждались в финансировании и не получили его — либо нуждались, но даже не подали заявку.`,
    's3.p4.value': `60%`,
    's3.p4.text':  `фирм, занимавших у онлайн-кредиторов, столкнулись с более высокой стоимостью займа, чем ожидали, — выше, чем у любого другого типа кредиторов.`,

    's3.closing': `Ни один из этих пунктов сам по себе не катастрофа. Нет ни пожара, ни судебного иска, ни конкурента с продуктом получше. Просто всё дорожает одновременно и для всех — а подушка измеряется неделями. Именно так выглядит большинство реальных провалов.`,

    's3.src1': `Запас наличности: JPMorgan Chase Institute, «Cash is King: Flows, Balances, and Buffer Days», на основе 470 млн транзакций 597 000 малых бизнесов. Данные за 2015 год — более свежего исследования такого масштаба найти не удалось.`,
    's3.src2': `Издержки и финансирование: Federal Reserve Small Business Credit Survey, 2026 Report on Employer Firms. Опрос проведён с 3 сентября по 14 ноября 2025 года, 6 525 ответов.`,

    /* ── 4. Где сосредоточен риск ───────────────────────────── */
    's4.h2':  `Основной риск приходится на первые четыре года.`,
    's4.sub': `Цифры закрытий на этой странице накопленные, из-за чего риск кажется постоянным. Это не так. Вот та же когорта, измеренная иначе: из бизнесов, которые ещё работают, сколько доживают ещё до одного года.`,

    's4.y1.k': `Год 1`,  's4.y1.v': `79,6%`, 's4.y1.n': `выживают`,
    's4.y2.k': `Год 2`,  's4.y2.v': `86,8%`, 's4.y2.n': `из тех, кто ещё открыт`,
    's4.y3.k': `Год 3`,  's4.y3.v': `88,9%`,
    's4.y4.k': `Год 4`,  's4.y4.v': `90,2%`,
    's4.y5.k': `Год 5`,  's4.y5.v': `90,5%`,
    's4.y6.k': `Год 6`,  's4.y6.v': `92,5%`,
    's4.y7.k': `Год 7`,  's4.y7.v': `93,9%`,
    's4.y8.k': `Год 8`,  's4.y8.v': `92,4%`,
    's4.y9.k': `Год 9`,  's4.y9.v': `92,7%`,
    's4.y10.k': `Год 10`, 's4.y10.v': `92,8%`,

    's4.line': `Первый год забирает примерно каждого пятого. К четвёртому году показатель превышает 90% и дальше держится в районе 90 с небольшим — пик в 93,9% на седьмом году, затем лёгкий откат и стабилизация. Риск никуда не исчезает. Но он перестаёт быть главным, что можно сказать о вашем бизнесе.`,

    's4.founder.h3': `Ещё один факт — если вы думаете, что упустили момент.`,
    's4.founder.p1': `Исследователи MIT и Бюро переписи населения США подняли административные данные по всем новым компаниям в стране и нашли, кто стоит за 1 из 1000 самых быстрорастущих. Их средний возраст — 45 лет.`,
    's4.founder.p2': `50-летний основатель почти вдвое вероятнее построит по-настоящему успешный бизнес, чем 30-летний. Самый сильный из найденных предикторов — не молодость, не смелость и не диплом, а опыт работы именно в той отрасли, где вы начинаете.`,
    's4.closing':    `А значит, опыт, из-за которого вам кажется, что вы опоздали, — это как раз то, что играет за вас.`,

    's4.src1': `Выживаемость год к году: U.S. Bureau of Labor Statistics, Business Employment Dynamics, таблица 7, бизнесы, открытые в 2015 году, отслеживание по март 2025 года.`,
    's4.src2': `Возраст основателя: Azoulay, Jones, Kim и Miranda, «Age and High-Growth Entrepreneurship», NBER Working Paper 24489, на основе административных данных Бюро переписи населения США.`,

    /* ── подвал ─────────────────────────────────────────────── */
    'footer.src1': `U.S. Bureau of Labor Statistics`,
    'footer.src2': `Federal Reserve Small Business Credit Survey`,
    'footer.src3': `JPMorgan Chase Institute`,
    'footer.src4': `National Bureau of Economic Research`,
    'footer.date': `Данные проверены 14 сентября 2026 года.`
  }

};

var I18N_DEFAULT = 'en';
var I18N_STORAGE_KEY = 'wsbf.lang';

function i18nHas(lang) {
  return Object.prototype.hasOwnProperty.call(I18N, lang) && I18N[lang];
}

function i18nString(lang, key) {
  var dict = i18nHas(lang) ? I18N[lang] : null;
  if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  return I18N[I18N_DEFAULT][key];
}

function i18nStoredLang() {
  try {
    var saved = window.localStorage.getItem(I18N_STORAGE_KEY);
    if (saved && i18nHas(saved)) return saved;
  } catch (e) {
    /* localStorage can be unavailable under file:// or in private mode */
  }
  return I18N_DEFAULT;
}

function i18nRememberLang(lang) {
  try {
    window.localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch (e) {
    /* not fatal — the choice simply won't persist */
  }
}

function applyI18n(lang) {
  if (!i18nHas(lang)) lang = I18N_DEFAULT;

  document.documentElement.setAttribute('lang', lang);

  var nodes = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var key = el.getAttribute('data-i18n');
    var value = i18nString(lang, key);
    if (typeof value !== 'string') continue;

    var attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  }

  var title = i18nString(lang, 'meta.title');
  if (typeof title === 'string') document.title = title;

  return lang;
}
