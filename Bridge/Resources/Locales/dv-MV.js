﻿Bridge.merge(new Bridge.CultureInfo("dv-MV", true), {
    englishName: "Divehi (Maldives)",
    nativeName: "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "ރ.",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 10,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],
        abbreviatedMonthGenitiveNames: ["ޖަނަވަރީ","ފެބްރުއަރީ","މާރޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޮގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],
        abbreviatedMonthNames: ["ޖަނަވަރީ","ފެބްރުއަރީ","މާރޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޮގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],
        amDesignator: "މކ",
        dateSeparator: "/",
        dayNames: ["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "ddd, yyyy MMMM dd HH:mm:ss",
        longDatePattern: "ddd, yyyy MMMM dd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM dd",
        monthGenitiveNames: ["ޖަނަވަރީ","ފެބްރުއަރީ","މާރޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޮގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],
        monthNames: ["ޖަނަވަރީ","ފެބްރުއަރީ","މާރޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޮގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ",""],
        pmDesignator: "މފ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yy",
        shortestDayNames: ["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy, MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});