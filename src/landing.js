// $(document).ready(function() {
//
//     $("#createAccountForm").validate({
//         rules: {
//             password: {
//               required: true,
//
//               minlength: 8,
//
//             },
//             confirmpassword: {
//                 equalTo: "#password"
//             }
//         },
//         messages: {
//             password: {
//                 required: "password is required",
//                 // minlength: 5 // <- this must be a string!
//             },
//             confirmpassword: {
//                 required: "confirm password is required",
//                 // minlength: 5 // <- this must be a string!
//             }
//         },
//         submitHandler: function(fId) {
//             var serForm = $(fId).serialize();
//             changepassword()
//         }
//     });
//
// });
//
// var changepassword = function() {
//     alert('Validated');
// };


var value = $("#password_reg").val();

$.validator.addMethod("checklower", function(value) {
  return /[a-z]/.test(value);
});
$.validator.addMethod("checkupper", function(value) {
  return /[A-Z]/.test(value);
});
$.validator.addMethod("checkdigit", function(value) {
  return /[0-9]/.test(value);
});
$.validator.addMethod("pwcheck", function(value) {
  return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value);
});

$('#signup-form').validate({
  rules: {
    password: {
      minlength: 8,
      maxlength: 30,
      required: true,
      //pwcheck: true,
      checklower: true,
      checkupper: true,
      checkdigit: true
    },
    confirmPassword: {
      equalTo: "#passwd_reg",
    },
  },
  messages: {
    password: {
      pwcheck: "Password is not strong enough",
      checklower: "Need at least 1 lowercase letter",
      checkupper: "Need at least 1 uppercase letter",
      checkdigit: "Need at least 1 digit"
    }
  },
  highlight: function(element) {
    var id_attr = "#" + $(element).attr("id") + "1";
    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');

    $('.help-block').css('display', '');
  },
  unhighlight: function(element) {
    var id_attr = "#" + $(element).attr("id") + "1";
    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');

    $('#confirmPassword').attr('disabled', false);
  },
  errorElement: 'span',
  errorClass: 'validate_cus',
  errorPlacement: function(error, element) {
    x = element.length;
    if (element.length) {
      error.insertAfter(element);
    } else {
      error.insertAfter(element);
    }
  }

});
