function exibeNota(data)
{
    if ($.isArray(data))
    {
        $("#retorno").empty();
        $.each(data, function(index, value)
        {
            $("#retorno").prepend("ID: "+value.Id+"<br>Titulo: "+value.Title+"<br>Conteudo: "+value.Body+"<br><br>");
        });
    }
    else
    {
        $("#retorno").html("ID: "+data.Id+"<br>Titulo: "+data.Title+"<br>Conteudo: "+data.Body+"<br><br>");
    }
    $("#loading").empty();
}

function exibeErroNota()
{
    $("#retorno").html("Ops, algo de errado aconteceu.");
    $("#loading").empty();
}

function aguardaNota()
{
    $("#loading").html("<img style='width: 15px; margin-left: 10px;' src='imgs/loading.gif' alt='loading'>");
}

function cliqueBotao(event)
{
    event.preventDefault();
    var id = $("#id_nota").val();

    jQuery.ajax(
    {
        type: "GET",
        dataType: "json",
        url: "http://devmedianotesapi.azurewebsites.net/api/notes/"+id,
        success: exibeNota,
        beforeSend: aguardaNota,
        error: exibeErroNota
    });
}

$(document).ready(function()
{
    $("#enviar").on('click', cliqueBotao);
});
