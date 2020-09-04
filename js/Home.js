$(document).ready(function(){
		
	$.ajax({
		type:'GET',
		url:'http://localhost:8080/contacts',
		success: function(contactArray){
			
			$.each(contactArray,function(index,contact){
				var contactInfo= '<p>'
				contactInfo += 'Name:'+ contact.firstName + ' ' + contact.lastName +'<br>';
				contactInfo += 'company:' + contact.company + '<br>';
				contactInfo += 'Phone:' + contact.phone + '<br>';
				contactInfo += 'Email:' + contact.email +'<br>';
				contactInfo +='</p>';
				contactInfo +='<hr>';
				
				var contactsDiv=$('#allContacts');
				contactsDiv.append(contactInfo);
			})
			
			
			
		},
		error : function(){
			alert('Failure!');
		}
		
	});
	
	
	$('#add-button').on('click',function(){
		$.ajax({
			type: 'POST',
			url:'http://localhost:8080/contact', 
			data: JSON.stringify({
				firstName: $('#add-first-name').val(),
				lastName: $('#add-last-name').val(),
				company: $('#add-company').val(),
				phone: $('#add-Phone').val(),
				Email: $('#add-Email').val()
			}),
			
			headers: {
				'Accept':'application/json',
				'Content-type': 'application/json'
			},
			
			'dataType':'json',
			
			success:function(contact){
				
				
				var contactInfo= '<p>'
				contactInfo += 'Name:'+ contact.firstName + ' ' + contact.lastName +'<br>';
				contactInfo += 'company:' + contact.company + '<br>';
				contactInfo += 'Phone:' + contact.phone + '<br>';
				contactInfo += 'Email:' + contact.email +'<br>';
				contactInfo +='</p>';
				contactInfo +='<hr>';
				
				var newContactDiv=$('#newContact');
				newContactDiv.append(contactInfo);
				
			},
			
			error:function(){
				alert('failure!');
			}
		});
		});
	
})