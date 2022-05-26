# Gets base SDK image from Microsoft
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

# Copy the project and dependencies
COPY shopping-api/*.csproj ./
RUN dotnet restore

# Copy the project files and build release
COPY . ./
RUN dotnet publish shopping-api -c Release -o out
RUN dotnet ef database update

# Generate runtime image of aspnetcore and pulls the published version from the build
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000
COPY --from=build-env /app/out .

# Runs the published dll file with the dotnet binary
ENTRYPOINT [ "dotnet", "shopping-api.dll" ]
