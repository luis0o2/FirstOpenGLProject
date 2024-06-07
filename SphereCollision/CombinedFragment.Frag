#version 330 core
out vec4 FragColor;
in vec2 TexCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform int objectType; // 0 for cube, 1 for pyramid

void main()
{
    vec4 texColor1 = texture(texture1, TexCoord);
    vec4 texColor2 = texture(texture2, TexCoord);
    if (objectType == 0) {
        // Cube specific color adjustments
        FragColor = texColor1 * vec4(1.0, 0.988, 0.255, 1.0); // Example color for the cube

    } else if (objectType == 1) {
        // Pyramid specific color adjustments
        FragColor = texColor2 * vec4(0.0, 1.0, 0.0, 1.0); // Example color for the pyramid
    }
}
