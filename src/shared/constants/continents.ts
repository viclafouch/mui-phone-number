import type { MuiTelInputCountry } from '@shared/constants/countries'

export type MuiTelInputContinent = 'EU' | 'AS' | 'NA' | 'SA' | 'OC' | 'AF'

type Continents = {
  [key in MuiTelInputContinent]: MuiTelInputCountry[]
}

export const CONTINENTS: Continents = {
  EU: [
    'AD',
    'AL',
    'AT',
    'AX',
    'BA',
    'BE',
    'BG',
    'BY',
    'CH',
    'CY',
    'CZ',
    'DE',
    'DK',
    'EE',
    'ES',
    'FI',
    'FO',
    'FR',
    'GB',
    'GG',
    'GI',
    'GR',
    'HR',
    'HU',
    'IE',
    'IM',
    'IS',
    'IT',
    'JE',
    'LI',
    'LT',
    'LU',
    'LV',
    'MC',
    'MD',
    'ME',
    'MK',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'RS',
    'RU',
    'SE',
    'SI',
    'SJ',
    'SK',
    'SM',
    'UA',
    'VA',
    'XK'
  ],
  AS: [
    'AE',
    'AF',
    'AM',
    'AZ',
    'BD',
    'BH',
    'BN',
    'BT',
    'CC',
    'CN',
    'CX',
    'GE',
    'HK',
    'ID',
    'IL',
    'IN',
    'IO',
    'IQ',
    'IR',
    'JO',
    'JP',
    'KG',
    'KH',
    'KP',
    'KR',
    'KW',
    'KZ',
    'LA',
    'LB',
    'LK',
    'MM',
    'MN',
    'MO',
    'MV',
    'MY',
    'NP',
    'OM',
    'PH',
    'PK',
    'PS',
    'QA',
    'SA',
    'SG',
    'SY',
    'TH',
    'TJ',
    'TM',
    'TR',
    'TW',
    'UZ',
    'VN',
    'YE'
  ],
  NA: [
    'AG',
    'AI',
    'AW',
    'BB',
    'BL',
    'BM',
    'BQ',
    'BS',
    'BZ',
    'CA',
    'CR',
    'CU',
    'CW',
    'DM',
    'DO',
    'GD',
    'GL',
    'GP',
    'GT',
    'HN',
    'HT',
    'JM',
    'KN',
    'KY',
    'LC',
    'MF',
    'MQ',
    'MS',
    'MX',
    'NI',
    'PA',
    'PM',
    'PR',
    'SV',
    'SX',
    'TC',
    'TT',
    'US',
    'VC',
    'VG',
    'VI'
  ],
  SA: [
    'AR',
    'BO',
    'BR',
    'CL',
    'CO',
    'EC',
    'FK',
    'GF',
    'GY',
    'PE',
    'PY',
    'SR',
    'UY',
    'VE'
  ],
  OC: [
    'AS',
    'AU',
    'CK',
    'FJ',
    'FM',
    'GU',
    'KI',
    'MH',
    'MP',
    'NC',
    'NF',
    'NR',
    'NU',
    'NZ',
    'PF',
    'PG',
    'PW',
    'SB',
    'TK',
    'TL',
    'TO',
    'TV',
    'VU',
    'WF',
    'WS'
  ],
  AF: [
    'AO',
    'BF',
    'BI',
    'BJ',
    'BW',
    'CD',
    'CF',
    'CG',
    'CI',
    'CM',
    'CV',
    'DJ',
    'DZ',
    'EG',
    'EH',
    'ER',
    'ET',
    'GA',
    'GH',
    'GM',
    'GN',
    'GQ',
    'GW',
    'KE',
    'KM',
    'LR',
    'LS',
    'LY',
    'MA',
    'MG',
    'ML',
    'MR',
    'MU',
    'MW',
    'MZ',
    'NA',
    'NE',
    'NG',
    'RE',
    'RW',
    'SC',
    'SD',
    'SH',
    'SL',
    'SN',
    'SO',
    'SS',
    'ST',
    'SZ',
    'TD',
    'TG',
    'TN',
    'TZ',
    'UG',
    'YT',
    'ZA',
    'ZM',
    'ZW'
  ]
}
