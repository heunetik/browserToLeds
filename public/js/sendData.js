$(document).on("submit", "#dataForm", (e) => {
    e.preventDefault();
    let data = {};
    data.text = $("#text").val();
    $.ajax({
        type: "POST",
        url: "/formData",
        data: data,
        success: () => {}
    });
});