$('.facebook-button').click(function () {
  window.open("https://facebook.com/" + $(this).data('facebook'), '_blank');
})

$('.email-button').click(function () {
  window.open('mailto:' + $(this).data('email'))
})

$('.twitter-button').click(function () {
  let langs = new Map();
  {% for lang in site.data.languages %}
  langs.set("{{ lang[0] }}", {
    "in-progress": "{{ lang[1].progress_tweet |cgi_escape }}",
    "no-2fa": "{{ lang[1].work_tweet |cgi_escape }}"
  }
  );
  {% endfor %}

  const lang = $(this).data('lang') // TODO: Check if langs contains key of lang value
  const status = $(this).data('status').toString()
  const handle = $(this).data('twitter')
  const text = langs.get(lang)[status].replace('TWITTERHANDLE', handle)

  window.open('https://twitter.com/share?url={{site.url | cgi_escape}}&amp;hashtags=SupportTwoFactorAuth&amp;text=' + text, '_blank');
})
