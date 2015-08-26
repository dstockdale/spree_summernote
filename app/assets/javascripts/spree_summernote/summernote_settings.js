(function() {
  // Spree's locales are different to Summernotes
  // Summernote defaults to english if it doesn't get what's being set
  var SpreeSummernote = {
    localeMap: function(value){
      var locales = {
        "ca": "ca-ES",
        "cs": "cs-CZ",
        "da": "da-DK",
        "de": "de-DE",
        "es": "es-ES",
        "fa": "fa-FA",
        "fi": "fi-FI",
        "fr": "fr-FR",
        "id": "id-ID",
        "it": "it-IT",
        "ja": "ja-JP",
        "ko": "ko-KR",
        "nb": "nb-NO",
        "nl": "nl-NL",
        "pl": "pl-PL",
        "pt": "pt-PT",
        "ro": "ro-RO",
        "ru": "ru-RU",
        "sk": "sk-SK",
        "sl-SI": "sl-SI",
        "sv": "sv-SE",
        "th": "th-TH",
        "uk": "uk-UA",
        "vi": "vi-VN",
        "zh-CN": "zh-CN",
        "zh-TW": "zh-TW"
      };
      return ((value in locales) ? locales[value] : value);
    },
    locale: function() {
      return document.documentElement.lang
    },
    translatedLocale: function() {
      return this.localeMap(document.documentElement.lang);
    }
  }
  
  window.Spree.SpreeSummernote = SpreeSummernote;

  $(document).ready(function() {

    var selectors = [
      '.summernote', 
      '.description .panel-body textarea',
      '#product_description', 
      '#taxon_description', 
      '#promotion_description'
    ].join(',');

    $(selectors).summernote({
      lang: SpreeSummernote.translatedLocale(),
      tabsize: 2,
      minHeight: 300,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['table', ['table']],
        ['insert', ['video','link']],
        ['misc', ['fullscreen', 'codeview', 'help']]
      ]
    });
    
  });
})();