(function () {
  var BASE = (window.GLASSLAB_BASE || '').replace(/\/$/, '');

  var MOA_LABEL = {
    ha_filler_crosslinked: "HA 필러",
    ha_skin_booster: "HA 스킨부스터",
    ha_glycerol_skinbooster: "HA+글리세롤 스킨부스터",
    hybrid_dual_ha_skinbooster_volume: "하이브리드 HA 스킨부스터",
    caha_filler: "CaHA 필러",
    pcl_filler: "PCL 필러",
    plla_filler_sculptra: "PLLA 필러",
    collagen_stimulator_pdlla_plla: "콜라겐 촉진제",
    adipose_matrix_renuva: "지방 매트릭스",
    acellular_dermal_matrix_ecm_skinbooster: "ECM 스킨부스터",
    pn_pdrn_injection: "PN/PDRN 주사",
    pn_pdrn_injection_with_ha: "PN/PDRN+HA",
    exosome_topical_or_injection: "엑소좀",
    stem_cell_svf_injection: "줄기세포/SVF",
    mesotherapy_skin_cocktail: "메조테라피",
    placenta_injection: "태반 주사",
    injectable_lipolysis_deoxycholate_or_mesotherapy: "주사 지방분해",
    botulinum_toxin_a: "보툴리눔 독소",
    microdosed_botulinum_for_skin: "마이크로 보톡스",
    pdo_pcl_plla_thread_lifting: "실 리프팅",
    monopolar_rf_lifting: "모노폴라 RF 리프팅",
    bipolar_multipolar_rf_contouring: "바이폴라/멀티폴라 RF",
    microneedling_rf: "마이크로니들링 RF",
    microwave_245ghz_skin_tightening: "마이크로웨이브 탄력",
    emface_hifes_rf: "HIFES RF",
    triple_wavelength_diode_lifting: "트리플 다이오드 리프팅",
    hifu_lifting: "HIFU 리프팅",
    linear_hifu_lifting: "선형 HIFU",
    synchronous_us_parallel_beam_softwave: "소프웨이브류 초음파",
    ldm_ultrasound_skin_care: "LDM 초음파",
    cryolipolysis_body_contouring: "냉동지방분해",
    vaginal_laxity_rf: "질 RF 치료",
    laser_hair_removal_alexandrite_ndyag: "레이저 제모",
    ipl_bbl_photorejuvenation: "IPL/BBL",
    laser_toning_qswitched_or_picosecond: "레이저 토닝",
    picosecond_laser_pigment: "피코초 레이저",
    vascular_pigment_laser_532_1064: "혈관/색소 레이저",
    nonablative_fractional_resurfacing: "논어블레이티브 프락셔널",
    fractional_laser_resurfacing: "프락셔널 레이저",
    fractional_picosecond_resurfacing: "피코 프락셔널",
    onychomycosis_laser: "손발톱 레이저",
    led_phototherapy: "LED 광치료",
    photodynamic_therapy: "광역동 치료",
    chemical_peel: "화학적 박피",
    hydradermabrasion: "물광 스크럽",
    needle_free_drug_delivery: "무침 약물 전달",
    ionzyme_iontophoresis_sonophoresis: "이온토포레시스",
    hyperbaric_oxygen: "고압산소 치료"
  };

  var IND_LABEL = {
    pigment_melasma: "기미",
    lifting_skin_tightening: "리프팅 · 탄력",
    wrinkle_contour: "주름 · 윤곽",
    skin_quality_wound_repair: "피부 재생",
    skin_quality_hydration: "보습",
    contour_skin_tightening: "윤곽 · 탄력",
    acne_scar_texture_resurfacing: "여드름 흉터 · 결",
    volume_collagen_stimulation: "볼륨 · 콜라겐",
    pigment_redness_photoaging: "색소 · 홍조 · 광노화",
    skin_quality_acne_inflammation: "여드름 · 염증",
    localized_fat_body_contouring: "부분 지방",
    hair_removal: "제모",
    vaginal_laxity: "질 이완",
    pigment_tattoo_skin_rejuvenation: "색소 · 문신",
    skin_quality_dermal_remodeling: "진피 리모델링",
    lifting_facial_muscle_tone: "안면 근육 리프팅",
    vascular_redness_pigment: "혈관 · 홍조 · 색소",
    acne_scar_pore_laxity: "여드름 흉터 · 모공",
    skin_texture_pore_neck: "목 · 모공 · 결",
    skin_quality_postprocedure_recovery: "시술 후 회복",
    skin_quality_recovery: "피부 회복",
    skin_quality_volume_regeneration: "볼륨 재생",
    acne_actinic_keratosis: "여드름 · 각화증",
    volume_contour_wrinkle: "볼륨 · 주름",
    localized_fat_jawline: "턱선 지방",
    skin_tightening_body_contouring: "바디 탄력",
    onychomycosis: "손발톱 진균",
    lifting_volume_fat_reduction: "리프팅 · 지방",
    pigment_acne_texture: "색소 · 여드름 · 결",
    wellness_oxygen_therapy: "웰니스 · 산소"
  };

  var GROUP_LABEL = {
    skin_quality: "피부건강",
    acne_scar: "여드름/흉터",
    lifting: "리프팅",
    wrinkle: "주름",
    pigment: "색소",
    body_fat: "바디",
    volume: "볼륨",
    hair_removal: "제모",
    hair_restoration: "모발",
    vascular: "혈관/홍조",
    tattoo: "문신",
    hyperhidrosis: "다한증",
    nail: "손발톱",
    intimate: "여성건강",
    healing: "회복/재생",
    inflammatory: "염증성 피부"
  };

  function slug(s) {
    return s.replace(/_/g, '-');
  }

  function cellUrl(classId, indication) {
    return BASE + '/cell/' + slug(classId) + '--' + slug(indication) + '/';
  }

  function groupUrl(group) {
    return BASE + '/group/' + slug(group) + '/';
  }

  function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  var INDEX = null;
  var TERMS = [];

  function loadIndex() {
    fetch(BASE + '/static/search_index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        INDEX = data;
        TERMS = Object.keys(data);
      })
      .catch(function () {});
  }

  function matchTerms(query) {
    if (!query || !INDEX) return [];
    var q = query.trim().toLowerCase();
    if (!q) return [];
    var exact = TERMS.filter(function (t) { return t.toLowerCase() === q; });
    var prefix = TERMS.filter(function (t) { return t.toLowerCase().startsWith(q) && exact.indexOf(t) < 0; });
    var contains = TERMS.filter(function (t) { return t.toLowerCase().includes(q) && exact.indexOf(t) < 0 && prefix.indexOf(t) < 0; });
    return exact.concat(prefix, contains).slice(0, 6);
  }

  function renderResults(matches, query) {
    var box = document.getElementById('search-results');
    if (!box) return;
    if (!matches.length) { box.hidden = true; return; }
    var re = new RegExp('(' + escRe(query.trim()) + ')', 'gi');
    var html = matches.map(function (term) {
      var data = INDEX[term];
      var top = (data.classes || []).slice(0, 2);
      var grpKr = GROUP_LABEL[data.group] || data.group;
      var grpUrl = groupUrl(data.group);
      var termHl = term.replace(re, '<mark>$1</mark>');
      var cells = top.map(function (c) {
        var moa = MOA_LABEL[c.class_id] || c.class_id;
        var ind = IND_LABEL[c.indication] || c.indication;
        var url = cellUrl(c.class_id, c.indication);
        return '<a class="sr-cell" href="' + url + '"><span class="sr-moa">' + moa + '</span><span class="sr-ind">→ ' + ind + '</span></a>';
      }).join('');
      return '<div class="sr-item">'
        + '<div class="sr-head"><span class="sr-term">' + termHl + '</span>'
        + '<a class="sr-group" href="' + grpUrl + '">' + grpKr + '</a></div>'
        + '<div class="sr-cells">' + cells + '</div>'
        + '</div>';
    }).join('');
    box.innerHTML = html;
    box.hidden = false;
  }

  function init() {
    var input = document.getElementById('consumer-search');
    var box = document.getElementById('search-results');
    if (!input || !box) return;

    loadIndex();

    input.addEventListener('input', function () {
      renderResults(matchTerms(input.value), input.value);
    });

    input.addEventListener('focus', function () {
      if (input.value) renderResults(matchTerms(input.value), input.value);
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest || !e.target.closest('.search-wrap')) box.hidden = true;
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { box.hidden = true; input.blur(); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
