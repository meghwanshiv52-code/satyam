<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 1000 milliseconds = 1 second. Pop-up 1 सेकंड बाद दिखाई देगा।
        setTimeout(function() {
            var modalElement = document.getElementById('joinModal');
            
            // यह सुनिश्चित करता है कि Pop-up (joinModal) का तत्व मौजूद हो
            if (modalElement) {
                // Bootstrap की Modal क्लास को कॉल करके Pop-up को दिखाएं
                var joinModal = new bootstrap.Modal(modalElement);
                joinModal.show();
            }
        }, 1000); 
    });
</script>