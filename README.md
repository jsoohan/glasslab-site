# Glass Lab — Medical Aesthetic Evidence Index

[![Live](https://img.shields.io/badge/live-glasslab.ai-2f5c50)](https://glasslab.ai/)

PubMed-grounded evidence map for medical aesthetic procedures.

- **303 cells** = MoA × clinical indication
- **19,240 PubMed papers** retrieved with brand-free MeSH+TIAB queries
- **5,975 tier-1+2** (RCT / meta / observational)
- **48 MoAs · 115 indications · 16 concern groups**
- **11 Korean clinics** scraped, 4,516 procedure rows mapped (90.9%)

## Layers

1. **Clinic procedure menu** — what Korean dermatology clinics list
2. **Brand → class map** — `brand_to_class_map.csv` (Botox, Thermage, Juvederm, etc. → generic MoA class)
3. **PubMed query** — brand-free `(MoA MeSH+TIAB) AND (Indication MeSH+TIAB)`
4. **Confidence Grade A-F** — quantity, quality, recency, specificity, consistency, journal impact, geography
5. **Direction** — supported / mixed / unsupported / insufficient (what studies conclude)

## Generated from
`/home/antiaging/website/build_site_v5.py` (Jinja2 templates + curated taxonomy v5 + cell confidence v1).

See `/methodology/` on the live site for methodology details.

Not medical advice. Internal evidence prototype.
