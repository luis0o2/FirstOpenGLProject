#version 330 core
out vec4 FragColor; // This is the output variable to the framebuffer

in vec2 TexCoord; // The texture coordinates from the vertex shader

uniform sampler2D ourTexture; // The texture sampler

void main()
{
     // Sample the color from the texture at the specified coordinates
    vec4 texColor = texture(ourTexture, TexCoord);
    
    // object color
    vec4 greenTint = vec4(0.0, 1.0, 0.0, 1.0);

    //combine colors
    FragColor = texColor * greenTint;
}
