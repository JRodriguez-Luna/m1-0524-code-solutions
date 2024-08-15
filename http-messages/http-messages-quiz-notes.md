# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

  > A client is a program or device that requests resources or services from a server.

- What is a server?

  > A server is a program or device that provides resources or services to clients.

- Which HTTP method does a browser issue to a web server when you visit a URL?

  > A browser typically issues a GET request to a web server when visiting a URL.

- What three things are on the start-line of an HTTP **request** message?

  > The HTTP method (e.g., GET, POST), the request URL (e.g., /index.html), and the HTTP version (e.g., HTTP/1.1).

- What three things are on the start-line of an HTTP **response** message?

  > The HTTP version (e.g., HTTP/1.1), the status code (e.g., 200), and the status message (e.g., OK).

- What are HTTP headers?

  > HTTP headers are key-value pairs sent in both request and response messages that provide additional information about the request or response.

- Where would you go if you wanted to learn more about a specific HTTP Header?

  > MDN Web Docs; HTTP Headers

- Is a body required for a valid HTTP request or response message?
  > No, a body is not required for a valid HTTP request or response message. The body is optional and is used to carry data if needed (in POST requests or responses with content).

## Notes

### Client–Server Model

1. **Definition**:

   - A distributed application structure.
   - Tasks or workloads are divided between servers (resource providers) and clients (service requesters).

2. **Communication**:

   - Clients and servers usually communicate over a network but can reside on the same hardware.
   - Servers share resources; clients request resources or services.

3. **Roles**:

   - **Servers**:
     - Run one or more server programs.
     - Provide resources or services to clients.
   - **Clients**:
     - Do not typically share resources.
     - Initiate communication with servers.

4. **Examples of Applications**:

   - Email
   - Network printing
   - The World Wide Web

5. **Operational Flow**:
   - Clients start communication sessions.
   - Servers wait for incoming requests from clients.

### Client and Server Roles

1. **Client-Server Relationship**:

   - Describes cooperating programs in an application.
   - **Server**: Provides functions or services.
   - **Client**: Initiates requests for services.

2. **Server Classification**:

   - Based on the type of services provided:
     - **Web Server**: Serves web pages.
     - **File Server**: Serves computer files.

3. **Shared Resources**:

   - Include software, programs, data, processors, and storage devices.
   - Sharing these resources constitutes a service provided by the server.

4. **Roles and Applications**:

   - A computer's role (client, server, or both) depends on the application's requirements.
   - A single computer can run both web server and file server software simultaneously to handle different requests.

5. **Communication**:
   - **Client-Server Communication**: Client requests services from the server.
   - **Inter-Server Communication**: Servers communicate with each other, often to synchronize data.

### Client and Server Communication

1. **Service Abstraction**:

   - A service abstracts computer resources from the client.
   - The client does not need to understand the server's internal processes.
   - Clients only need to understand the response format based on the application protocol.

2. **Request–Response Messaging**:

   - **Pattern**: Client sends a request, server returns a response.
   - This exchange is a form of inter-process communication.

3. **Communication Protocols**:

   - Computers must use a common language and follow rules defined by a communication protocol.
   - Protocols operate in the application layer and define the dialogue patterns.
   - An **Application Programming Interface (API)** may be used to formalize data exchange:
     - **Abstraction Layer**: Facilitates access to services.
     - **Content Format**: Restricts communication to a specific format, aiding in parsing.
     - **Cross-Platform Data Exchange**: Facilitates data exchange across different platforms.

4. **Server Load Management**:

   - Servers can receive requests from many clients quickly.
   - A scheduling system prioritizes requests to manage limited resources.
   - Server software may limit availability to prevent abuse and ensure maximum availability.

5. **Security Considerations**:
   - **Denial of Service Attacks**: Exploit the server's obligation to process requests by overwhelming it with excessive rates.
   - **Encryption**: Should be used to protect sensitive information communicated between client and server.

### HTTP Messages

- **HTTP Messages**: Data exchanged between client and server, consisting of requests and responses.

### HTTP Requests

- **Request Line**:

  - **Method**: Action (e.g., GET, POST).
  - **Request Target**: URL or path (e.g., `/index.html`).
  - **HTTP Version**: Protocol version (e.g., HTTP/1.1).

- **Headers**: Metadata about the request, such as `User-Agent` and `Accept`.

- **Body**: Optional data sent with the request (e.g., form data). Not present in all requests.

### HTTP Responses

- **Status Line**:

  - **HTTP Version**: Protocol version (e.g., HTTP/1.1).
  - **Status Code**: Indicates result (e.g., 200 for OK, 404 for Not Found).
  - **Status Text**: Description of the status code.

- **Headers**: Metadata about the response, like `Content-Type`.

- **Body**: Optional data returned in the response (e.g., HTML content). Not always present.

### HTTP/2 Improvements

- **Frames**: HTTP/2 breaks messages into frames, allowing for better performance:
  - **Header Compression**: Reduces repetition of headers.
  - **Multiplexing**: Multiple requests can be sent over a single connection.

### Key Points

- **Headers**: Meta-information for both requests and responses.
- **Body**: Main content; not always included.
- **HTTP/2**: Enhances performance with frames and multiplexing, but is transparent to developers.
