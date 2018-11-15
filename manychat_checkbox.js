<!-- ManyChat -->
<script src="//widget.manychat.com/247248285661477.js" async="async">
</script>
<script>
$(function () {
   var widgetId = "3808671"; //change this to correspond with Manychat Widget ID

   $('[href="#submit-form"]').each(function() {
      $(this).after($('<div class="mcwidget-checkbox" data-widget-id="'+widgetId+'"></div>'));         
   });

   $('[href="#submit-form"]').on('click', function(ev) {
      MC.getWidget(widgetId).submit();         
   });
});
</script>
