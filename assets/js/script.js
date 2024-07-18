//código para inicializar los tooltips de los botones
document.addEventListener("DOMContentLoaded", function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl); 
    });
  });
//codigo para el carrusel
  $(document).ready(function(){
    $("#CarouselRicomida").carousel();
    $("#CarouselRicomida").on("slide.bs.carousel", function(e){
      var slideIndex = $(e.relatedTarget).index();
      console.log("Slide index: " + slideIndex);
      
      var buttons = $('#CarouselRicomida #indicators button');
      console.log(buttons); // Verifica si los botones existen
      
      buttons.removeClass('active');
      buttons.filter('[data-bs-slide-to="' + slideIndex + '"]').addClass('active');
    });
  });
//cambiar el texto a color rojo ingredientes
$(document).ready(function(){
  $("#myingred").on("dblclick",function(){
    let color_letter =  $(this).css("color");
    if (color_letter === "rgb(255, 0, 0)" || color_letter === "red") {
      $(this).css("color", "black");
    } else {
      $(this).css("color", "red");
    }
  });
});
//cambiar el texto a color rojo preparacio
$(document).ready(function(){
  $("#myprepe").on("dblclick",function(){
    let color_letter =  $(this).css("color");
    if (color_letter === "rgb(255, 0, 0)" || color_letter === "red") {
      $(this).css("color", "black");
    } else {
      $(this).css("color", "red");
    }
  });
});
/*alert del button enviar por correo */
$(document).ready(function(){
  $('#enviarCorreo').click(function(){
    alert("El correo fue enviado correctamente");
  });
});
/*metodo taggle implementado en las card de la seccion recetas*/
$(document).ready(function(){
  $('.toggle-cards').click(function(){
    //para perder la visibilidad de un solo cuerpo
    $(this).closest('.card').find('.card-body').toggle();
  });
});
/*Recuperar el cuerpo de las card haciedo clic en la imagen */
$(document).ready(function(){
  $('.card-img-top').click(function(){
    let cardBody = $(this).closest('.card').find('.card-body').toggle();
    cardBody.show();
  })
});